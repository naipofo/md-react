"use client";

import { ReactNode, useRef, PointerEvent } from "react";

import "./button.scss";

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

function distanceToFurthestCorner(x: number, y: number, rect: DOMRect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
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
  const rippleLayer = useRef<HTMLDivElement>(null);

  const onPointerDown = (event: PointerEvent) => {
    if (disabled || !rippleLayer.current) {
      return;
    }

    const ripple = document.createElement("div");
    const bb = rippleLayer.current.getBoundingClientRect();
    const radius = distanceToFurthestCorner(event.clientX, event.clientY, bb);

    const offsetX = event.clientX - bb.left;
    const offsetY = event.clientY - bb.top;

    ripple.classList.add("MdcRipple");
    ripple.style.setProperty("--ripple-position-x", `${offsetX - radius}px`);
    ripple.style.setProperty("--ripple-position-y", `${offsetY - radius}px`);
    ripple.style.setProperty("--ripple-size", `${radius * 2}px`);

    rippleLayer.current.appendChild(ripple);

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
      onPointerDown={onPointerDown}
      disabled={disabled}
      aria-pressed={toggle ? selected : undefined}
    >
      <div className="MdcStateLayer" />
      <div className="MdcElevationLayer" />
      <div className="MdcRippleLayer" ref={rippleLayer} />
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
