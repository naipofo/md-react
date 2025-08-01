"use client";

import { ReactNode } from "react";

import "./button.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { ElevationLayer } from "../../component-utils/elevation/ElevationLayer";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";

interface ButtonProps {
  children: ReactNode;
  shape?: "square" | "round";
  disabled?: boolean;
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
  size?: "x-small" | "small" | "medium" | "large" | "x-large";
  toggle?: boolean;
  selected?: boolean;
  // TODO: separate icon component, cascade styles to it
  startIcon?: string;
  endIcon?: string;
}

export const Button = ({
  children,
  shape = "square",
  disabled = false,
  variant = "filled",
  size = "small",
  toggle = false,
  selected = false,
  startIcon = undefined,
  endIcon = undefined,
}: ButtonProps) => {
  const { rippleLayer, rippleTarget } = useRipple<HTMLButtonElement>();

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

  return (
    <button
      className={classNames.join(" ")}
      disabled={disabled}
      aria-pressed={toggle ? selected : undefined}
      ref={rippleTarget}
    >
      <StateLayer />
      <ElevationLayer />
      {rippleLayer}
      {startIcon && (
        <svg viewBox="0 0 24 24" className="MdcButton-icon">
          <path fill="currentColor" d={startIcon} />
        </svg>
      )}
      {children}
      {endIcon && (
        <svg viewBox="0 0 24 24" className="MdcButton-icon">
          <path fill="currentColor" d={endIcon} />
        </svg>
      )}
    </button>
  );
};
