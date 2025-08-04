"use client";

import { ReactNode, useRef } from "react";
import "./button-group.scss";
import { ButtonGroupContext } from "./button-group-context";

interface ButtonGroupProps {
  children: ReactNode;
  variant?: "standard" | "connected";
  size?: "x-small" | "small" | "medium" | "large" | "x-large";
}

export const ButtonGroup = ({
  children,
  variant = "standard",
  size = "small",
}: ButtonGroupProps) => {
  const container = useRef<HTMLDivElement>(null);

  const onClick = (target: HTMLElement) => {
    if (variant !== "standard") return;

    const elementWidth = target.offsetWidth;
    const targetExtraPadding = elementWidth * (0.15 / 2);

    const computedStyles = getComputedStyle(target);

    const paddingFromLeft = parseFloat(
      computedStyles.getPropertyValue("--md-runtime-group-padding-from-left"),
    );
    const paddingFromRight = parseFloat(
      computedStyles.getPropertyValue("--md-runtime-group-padding-from-right"),
    );

    // .9 is there to accomodate for the fast-spatial spring overshoot
    if (paddingFromLeft === 0 || paddingFromRight === 0) {
      const finalExtraPadding = Math.min(
        (paddingFromLeft || paddingFromRight) * 0.9,
        targetExtraPadding,
      );
      container.current?.style.setProperty(
        "--md-runtime-group-padding-shrink",
        `${finalExtraPadding}px`,
      );
      container.current?.style.setProperty(
        "--md-runtime-group-padding-grow",
        `${finalExtraPadding}px`,
      );
    } else {
      const finalExtraPadding = Math.min(
        paddingFromLeft * 0.9,
        paddingFromRight * 0.9,
        targetExtraPadding,
      );
      container.current?.style.setProperty(
        "--md-runtime-group-padding-shrink",
        `${finalExtraPadding}px`,
      );
      container.current?.style.setProperty(
        "--md-runtime-group-padding-grow",
        `${finalExtraPadding * 2}px`,
      );
    }
  };

  const classNames = ["MdcButtonGroup"];

  classNames.push(`MdcButtonGroup-${size.replace("-", "")}`);
  classNames.push(`MdcButtonGroup-${variant}`);

  return (
    <ButtonGroupContext value={{ reportHover: onClick }}>
      <div className={classNames.join(" ")} ref={container}>
        {children}
      </div>
    </ButtonGroupContext>
  );
};
