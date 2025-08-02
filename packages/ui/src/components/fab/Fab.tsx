"use client";

import "./fab.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { ElevationLayer } from "../../component-utils/elevation/ElevationLayer";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";
import { ReactNode } from "react";

interface FabProps {
  icon: string;
  label?: ReactNode;
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
  label,
  variant = "primary",
  size = "baseline",
}: FabProps) => {
  const { rippleLayer, rippleTarget } = useRipple<HTMLButtonElement>();

  const classNames = ["MdcFab"];
  classNames.push(`MdcFab-${variant}`);
  classNames.push(`MdcFab-${size}`);
  if (label) {
    classNames.push("MdcFab-extended");
  }

  return (
    <button className={classNames.join(" ")} ref={rippleTarget}>
      <StateLayer />
      <ElevationLayer />
      {rippleLayer}
      <svg viewBox="0 0 24 24" className="MdcFab-icon">
        <path fill="currentColor" d={icon} />
      </svg>
      {label && <span className="MdcFab-label">{label}</span>}
    </button>
  );
};
