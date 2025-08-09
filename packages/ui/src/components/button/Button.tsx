"use client";

import { ReactNode, useRef } from "react";

import "./button.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { ElevationLayer } from "../../component-utils/elevation/ElevationLayer";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";
import { OverlayContainer } from "../../component-utils/overlay-container/OverlayContainer";
import { useButtonGroupAware } from "../button-group/useButtonGroupAware";
import { FocusRing } from "../focus-ring/FocusRing";

interface ButtonProps {
  children?: ReactNode;
  shape?: "square" | "round";
  disabled?: boolean;
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
  size?: "x-small" | "small" | "medium" | "large" | "x-large";
  toggle?: boolean;
  selected?: boolean;
  // TODO: separate icon component, cascade styles to it
  startIcon?: string;
  endIcon?: string;

  startFilledIcon?: string;
  endFilledIcon?: string;
}

export const Button = ({
  children = undefined,
  shape = "square",
  disabled = false,
  variant = "filled",
  size = "small",
  toggle = false,
  selected = false,
  startIcon = undefined,
  endIcon = undefined,
  startFilledIcon = undefined,
  endFilledIcon = undefined,
}: ButtonProps) => {
  const buttonRef = useRef(null);
  const { rippleLayer } = useRipple<HTMLButtonElement>(buttonRef);
  useButtonGroupAware(buttonRef);

  const classNames = ["MdcButton"];

  classNames.push(`MdcButton-${size.replace("-", "")}`);
  classNames.push(`MdcButton-${variant}`);
  classNames.push(`MdcButton-${shape}`);

  if (toggle) {
    classNames.push("MdcButton-toggle");
    if (selected) {
      classNames.push("MdcButton-selected");
    }
  }

  if (disabled) {
    classNames.push("MdcButton-disabled");
  }

  const isPressed = toggle ? selected : undefined;

  return (
    <button
      className={classNames.join(" ")}
      disabled={disabled}
      aria-pressed={isPressed}
      ref={buttonRef}
    >
      <FocusRing />
      <ElevationLayer />
      <OverlayContainer>
        <StateLayer />
        {rippleLayer}
      </OverlayContainer>
      {startIcon && (
        <svg viewBox="0 0 24 24" className="MdcButton-icon">
          <path
            fill="currentColor"
            d={isPressed ? startFilledIcon || startIcon : startIcon}
          />
        </svg>
      )}
      {children}
      {endIcon && (
        <svg viewBox="0 0 24 24" className="MdcButton-icon">
          <path
            fill="currentColor"
            d={isPressed ? endFilledIcon || endIcon : endIcon}
          />
        </svg>
      )}
    </button>
  );
};
