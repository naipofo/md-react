"use client";

import "./icon-button.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { ElevationLayer } from "../../component-utils/elevation/ElevationLayer";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";
import { OverlayContainer } from "../../component-utils/overlay-container/OverlayContainer";

interface IconButtonProps {
  shape?: "square" | "round";
  disabled?: boolean;
  variant?: "filled" | "tonal" | "outlined" | "standard";
  size?: "x-small" | "small" | "medium" | "large" | "x-large";
  width?: "narrow" | "default" | "wide";
  toggle?: boolean;
  selected?: boolean;

  // TODO: separate icon component, support filled/outlined styles via that
  outlinedIcon?: string;
  filledIcon: string;
}

export const IconButton = ({
  shape = "square",
  disabled = false,
  variant = "filled",
  size = "small",
  width = "default",
  toggle = false,
  selected = false,
  outlinedIcon,
  filledIcon,
}: IconButtonProps) => {
  const { rippleLayer, rippleTarget } = useRipple<HTMLButtonElement>();

  const classNames = ["MdcIconButton"];

  classNames.push(`MdcIconButton-${size.replace("-", "")}`);
  classNames.push(`MdcIconButton-${variant}`);
  classNames.push(`MdcIconButton-${shape}`);
  classNames.push(`MdcIconButton-${width}`);

  if (toggle) {
    classNames.push("MdcIconButton-toggle");
    if (selected) {
      classNames.push("MdcIconButton-selected");
    }
  }

  if (disabled) {
    classNames.push("MdcIconButton-disabled");
  }

  return (
    <button
      className={classNames.join(" ")}
      disabled={disabled}
      aria-pressed={toggle ? selected : undefined}
      ref={rippleTarget}
    >
      <ElevationLayer />
      <OverlayContainer>
        <StateLayer />
        {rippleLayer}
      </OverlayContainer>
      <svg viewBox="0 0 24 24" className="MdcIconButton-icon">
        <path
          fill="currentColor"
          d={toggle && !selected ? outlinedIcon || filledIcon : filledIcon}
        />
      </svg>
    </button>
  );
};
