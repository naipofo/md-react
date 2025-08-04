"use client";

import { useEffect, useRef } from "react";
import "./ripple.scss";

function distanceToFurthestCorner(x: number, y: number, rect: DOMRect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}

// TODO: Manual ripple on eg. keyboard

export const useRipple = <T extends HTMLElement>(
  elementRef: React.RefObject<T | null>,
) => {
  const rippleLayer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rippleLayer.current || !elementRef.current) return;
    const element = elementRef.current;
    const rippleContainer = rippleLayer.current;

    const onPointerDown = (event: PointerEvent) => {
      const ripple = document.createElement("div");
      const bb = rippleContainer.getBoundingClientRect();
      const radius = distanceToFurthestCorner(event.clientX, event.clientY, bb);

      const offsetX = event.clientX - bb.left;
      const offsetY = event.clientY - bb.top;

      ripple.classList.add("MdcRipple");
      ripple.style.setProperty("--ripple-position-x", `${offsetX - radius}px`);
      ripple.style.setProperty("--ripple-position-y", `${offsetY - radius}px`);
      ripple.style.setProperty("--ripple-size", `${radius * 2}px`);

      rippleContainer.appendChild(ripple);

      const pointerUp = () => {
        ripple.classList.add("MdcRipple-fading-out");

        const onTransitionEnd = (e: TransitionEvent) => {
          if (e.propertyName === "opacity") {
            ripple.remove();
            ripple.removeEventListener("transitionend", onTransitionEnd);
          }
        };

        ripple.addEventListener("transitionend", onTransitionEnd);

        window.removeEventListener("pointerup", pointerUp);
        window.removeEventListener("pointercancel", pointerUp);
      };
      window.addEventListener("pointerup", pointerUp);
      window.addEventListener("pointercancel", pointerUp);
    };

    element.addEventListener("pointerdown", onPointerDown);

    return () => {
      element.removeEventListener("pointerdown", onPointerDown);
    };
  }, [elementRef, rippleLayer]);

  return {
    rippleLayer: <div className="MdcRippleLayer" ref={rippleLayer} />,
  };
};
