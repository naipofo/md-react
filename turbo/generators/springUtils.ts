/**
 * A point represented as a [x, y] tuple.
 */
type Point = [number, number];

/**
 * Calculates the vertical distance between a point and a line segment.
 * @param point The point [x, y].
 * @param lineStart The start of the line segment [x1, y1].
 * @param lineEnd The end of the line segment [x2, y2].
 * @returns The vertical distance.
 */
function getVerticalDistance(
  point: Point,
  lineStart: Point,
  lineEnd: Point,
): number {
  const [x, y] = point;
  const [startX, startY] = lineStart;
  const [endX, endY] = lineEnd;

  // Avoid division by zero if the line is vertical
  if (startX === endX) {
    return Math.abs(x - startX);
  }

  // Calculate the y-value on the line at the point's x-coordinate
  const lineYatX = startY + ((endY - startY) * (x - startX)) / (endX - startX);

  return Math.abs(y - lineYatX);
}

/**
 * Simplifies a curve using the Ramer-Douglas-Peucker algorithm with vertical distance.
 * This is useful for reducing the number of points in the CSS `linear()` function.
 * @param points The array of points to simplify.
 * @param tolerance The maximum allowed vertical distance (error). A smaller value means more points and higher accuracy.
 * @returns The simplified array of points.
 */
function simplifyCurve(points: Point[], tolerance: number): Point[] {
  if (points.length <= 2) {
    return points;
  }

  const simplified: Point[] = [points[0]]; // Always keep the first point

  function douglasPeucker(startIndex: number, endIndex: number) {
    let maxDistance = 0;
    let index = 0;

    for (let i = startIndex + 1; i < endIndex; i++) {
      const distance = getVerticalDistance(
        points[i],
        points[startIndex],
        points[endIndex],
      );
      if (distance > maxDistance) {
        maxDistance = distance;
        index = i;
      }
    }

    if (maxDistance > tolerance) {
      douglasPeucker(startIndex, index);
      simplified.push(points[index]);
      douglasPeucker(index, endIndex);
    }
  }

  douglasPeucker(0, points.length - 1);
  simplified.push(points[points.length - 1]); // Always keep the last point

  return simplified;
}

/**
 * Creates a spring physics model.
 *
 * @param stiffness The spring stiffness coefficient.
 * @param dampingRatio The damping ratio.
 *   - > 1: Over-damped (slowly settles)
 *   - = 1: Critically-damped (settles quickly)
 *   - < 1: Under-damped (oscillates)
 *   - = 0: Undamped (oscillates forever)
 * @returns A tuple containing the duration in milliseconds and an easing function.
 */
function createSpring(
  stiffness: number,
  dampingRatio: number,
): [number, (t: number) => number] {
  const finalPosition = 1;
  const initialValue = 0;
  const initialDisplacement = initialValue - finalPosition;
  const initialVelocity = 0;

  // These thresholds determine when the spring is considered "at rest".
  // They are derived from typical values used in Android's physics animations.
  const valueThreshold = 0.001;
  const velocityThreshold = valueThreshold * 62.5;

  const naturalFreq = Math.sqrt(stiffness);

  let gammaPlus: number, gammaMinus: number, dampedFreq: number;
  if (dampingRatio > 1) {
    // Over-damped
    const dampRatioSqrt = Math.sqrt(dampingRatio * dampingRatio - 1);
    gammaPlus = naturalFreq * (-dampingRatio + dampRatioSqrt);
    gammaMinus = naturalFreq * (-dampingRatio - dampRatioSqrt);
  } else if (dampingRatio < 1 && dampingRatio >= 0) {
    // Under-damped
    dampedFreq = naturalFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }

  /**
   * Calculates the spring's state (displacement and velocity) at a given time.
   */
  const calculateSpringState = (
    timeSec: number,
  ): { displacement: number; velocity: number } => {
    let displacement: number;
    let velocity: number;

    if (dampingRatio > 1) {
      // Over-damped
      const coeffA =
        initialDisplacement -
        (gammaMinus * initialDisplacement - initialVelocity) /
          (gammaMinus - gammaPlus);
      const coeffB =
        (gammaMinus * initialDisplacement - initialVelocity) /
        (gammaMinus - gammaPlus);
      displacement =
        coeffA * Math.exp(gammaMinus * timeSec) +
        coeffB * Math.exp(gammaPlus * timeSec);
      velocity =
        coeffA * gammaMinus * Math.exp(gammaMinus * timeSec) +
        coeffB * gammaPlus * Math.exp(gammaPlus * timeSec);
    } else if (dampingRatio === 1) {
      // Critically damped
      const coeffA = initialDisplacement;
      const coeffB = initialVelocity + naturalFreq * initialDisplacement;
      const expTerm = Math.exp(-naturalFreq * timeSec);
      displacement = (coeffA + coeffB * timeSec) * expTerm;
      velocity = displacement * -naturalFreq + coeffB * expTerm;
    } else {
      // Under-damped
      const cosCoeff = initialDisplacement;
      const sinCoeff =
        (1 / dampedFreq) *
        (dampingRatio * naturalFreq * initialDisplacement + initialVelocity);
      const expTerm = Math.exp(-dampingRatio * naturalFreq * timeSec);
      displacement =
        expTerm *
        (cosCoeff * Math.cos(dampedFreq * timeSec) +
          sinCoeff * Math.sin(dampedFreq * timeSec));
      velocity =
        displacement * -naturalFreq * dampingRatio +
        expTerm *
          (-dampedFreq * cosCoeff * Math.sin(dampedFreq * timeSec) +
            dampedFreq * sinCoeff * Math.cos(dampedFreq * timeSec));
    }

    return { displacement, velocity };
  };

  // Calculate the duration by simulating until the spring settles.
  let duration = 0;
  let time = 0;
  const maxDuration = 5000; // Cap duration to prevent extremely long calculations.
  while (true) {
    const timeSec = time / 1000;
    const { displacement, velocity } = calculateSpringState(timeSec);

    // If undamped, it will oscillate forever. We must cap the duration.
    if (dampingRatio === 0) {
      duration = maxDuration;
      break;
    }

    if (
      Math.abs(displacement) < valueThreshold &&
      Math.abs(velocity) < velocityThreshold
    ) {
      duration = time;
      break;
    }

    if (time >= maxDuration) {
      duration = maxDuration;
      break;
    }

    time += 1;
  }

  /**
   * The easing function.
   * @param t A value from 0 to 1 representing progress.
   * @returns The animated value, mapped from 0 to 1.
   */
  const easing = (t: number): number => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;

    const timeSec = (t * duration) / 1000;
    const { displacement } = calculateSpringState(timeSec);
    return displacement + finalPosition;
  };

  return [duration, easing];
}

/**
 * Generates CSS properties for a spring animation using the `linear()` easing function.
 *
 * This function models a spring's motion and converts it into a set of points
 * that can be used in CSS to create a realistic spring-like animation. The curve
 * is simplified to reduce the number of points for performance, while maintaining
 * visual accuracy.
 *
 * @param stiffness - The stiffness of the spring. Higher values make the spring more rigid and bouncy.
 * @param damping - The damping ratio of the spring. This controls how quickly the spring settles.
 *   - A value of 1 is critically damped (no oscillation).
 *   - Values less than 1 are underdamped (oscillates).
 *   - Values greater than 1 are overdamped (slowly returns to rest).
 * @returns An object with `easing` and `duration` properties for use in CSS.
 */
export function generateSpringCss(
  stiffness: number,
  damping: number,
): { easing: string; duration: string } {
  const [duration, easingFunc] = createSpring(stiffness, damping);

  // Generate a high-resolution set of points from the easing function.
  // 1000 points is a good balance between accuracy and performance.
  const numPoints = 1000;
  const points: Point[] = Array.from({ length: numPoints }, (_, i) => {
    const progress = i / (numPoints - 1);
    return [progress, easingFunc(progress)];
  });

  // Simplify the curve to reduce the number of points in the CSS output.
  // A tolerance of 0.0001 provides a good balance of accuracy and point reduction.
  const simplifiedPoints = simplifyCurve(points, 0.0001);

  const values = simplifiedPoints
    .map(([t, v], index) => {
      // For the first and last points in `linear()`, the percentage is optional.
      if (index === 0 || index === simplifiedPoints.length - 1) {
        return `${v.toFixed(4)}`;
      }
      // Format as "value time%" for the linear() function. e.g., "1.1 50.00%"
      return `${v.toFixed(4)} ${(t * 100).toFixed(2)}%`;
    })
    .join(", ");

  return {
    easing: `linear(${values})`,
    duration: `${Math.round(duration)}ms`,
  };
}
