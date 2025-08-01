"use client";

import "./fab.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { ElevationLayer } from "../../component-utils/elevation/ElevationLayer";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";

interface FabProps {
  icon: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "primary-tonal"
    | "secondary-tonal"
    | "tertiary-tonal";
  size?: "baseline" | "medium" | "large";
}

export const Fab = ({
  icon,
  variant = "primary",
  size = "baseline",
}: FabProps) => {
  const { rippleLayer, rippleTarget } = useRipple<HTMLButtonElement>();

  const classNames = ["MdcFab"];
  classNames.push(`MdcFab-${variant}`);
  classNames.push(`MdcFab-${size}`);

  return (
    <button className={classNames.join(" ")} ref={rippleTarget}>
      <StateLayer />
      <ElevationLayer />
      {rippleLayer}
      <svg viewBox="0 0 24 24" className="MdcFab-icon">
        <path fill="currentColor" d={icon} />
      </svg>
    </button>
  );
};
