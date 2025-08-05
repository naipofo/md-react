"use client";

import "./fab-menu-close-button.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { ElevationLayer } from "../../component-utils/elevation/ElevationLayer";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";
import { useRef } from "react";
import { OverlayContainer } from "../../component-utils/overlay-container/OverlayContainer";

interface FabMenuCloseButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
}

export const FabMenuCloseButton = ({
  variant = "primary",
}: FabMenuCloseButtonProps) => {
  const buttonRef = useRef(null);
  const { rippleLayer } = useRipple<HTMLButtonElement>(buttonRef);

  const classNames = ["MdcFabMenuCloseButton"];
  classNames.push(`MdcFabMenuCloseButton-${variant}`);

  return (
    <button className={classNames.join(" ")} ref={buttonRef}>
      <ElevationLayer />
      <OverlayContainer>
        <StateLayer />
        {rippleLayer}
      </OverlayContainer>
      <svg viewBox="0 0 24 24" className="MdcFabMenuCloseButton-icon">
        <path
          fill="currentColor"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        />
      </svg>
    </button>
  );
};
