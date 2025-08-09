"use client";

import "./fab.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { ElevationLayer } from "../../component-utils/elevation/ElevationLayer";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";
import { ReactNode, useRef } from "react";
import { OverlayContainer } from "../../component-utils/overlay-container/OverlayContainer";
import { FocusRing } from "../focus-ring/FocusRing";

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
  const buttonRef = useRef(null);
  const { rippleLayer } = useRipple<HTMLButtonElement>(buttonRef);

  const classNames = ["MdcFab"];
  classNames.push(`MdcFab-${variant}`);
  classNames.push(`MdcFab-${size}`);
  if (label) {
    classNames.push("MdcFab-extended");
  }

  return (
    <button className={classNames.join(" ")} ref={buttonRef}>
      <FocusRing />
      <ElevationLayer />
      <OverlayContainer>
        <StateLayer />
        {rippleLayer}
      </OverlayContainer>
      <svg viewBox="0 0 24 24" className="MdcFab-icon">
        <path fill="currentColor" d={icon} />
      </svg>
      {label && <span className="MdcFab-label">{label}</span>}
    </button>
  );
};
