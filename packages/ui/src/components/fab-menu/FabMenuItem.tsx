"use client";

import "./fab-menu-item.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { ElevationLayer } from "../../component-utils/elevation/ElevationLayer";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";
import { ReactNode, useRef } from "react";
import { OverlayContainer } from "../../component-utils/overlay-container/OverlayContainer";

interface FabMenuItemProps {
  children: ReactNode;
  icon?: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

export const FabMenuItem = ({
  icon,
  children: label,
  variant = "primary",
}: FabMenuItemProps) => {
  const buttonRef = useRef(null);
  const { rippleLayer } = useRipple<HTMLButtonElement>(buttonRef);

  const classNames = ["MdcFabMenuItem"];
  classNames.push(`MdcFabMenuItem-${variant}`);

  return (
    <button className={classNames.join(" ")} ref={buttonRef}>
      <ElevationLayer />
      <OverlayContainer>
        <StateLayer />
        {rippleLayer}
      </OverlayContainer>
      {icon && (
        <svg viewBox="0 0 24 24" className="MdcFabMenuItem-icon">
          <path fill="currentColor" d={icon} />
        </svg>
      )}
      <span className="MdcFabMenuItem-label">{label}</span>
    </button>
  );
};
