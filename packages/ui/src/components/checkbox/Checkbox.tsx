"use client";

import { useRef } from "react";

import "./checkbox.scss";
import { useRipple } from "../../component-utils/ripple/Ripple";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";
import { OverlayContainer } from "../../component-utils/overlay-container/OverlayContainer";
import { FocusRing } from "../focus-ring/FocusRing";

interface CheckboxProps {
  checked: boolean | "indeterminate";
  hasError?: boolean;
  disabled?: boolean;
}

export const Checkbox = ({
  checked = false,
  hasError = false,
  disabled = false,
}: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const { rippleLayer } = useRipple(checkboxRef);

  const classNames = ["MdcCheckbox"];
  if (disabled) {
    classNames.push("MdcCheckbox-disabled");
  }
  if (hasError) {
    classNames.push("MdcCheckbox-error");
  }
  if (checked === true) {
    classNames.push("MdcCheckbox-checked");
  } else if (checked === "indeterminate") {
    classNames.push("MdcCheckbox-indeterminate");
  }

  return (
    <div className={classNames.join(" ")}>
      <FocusRing />
      <OverlayContainer>
        <StateLayer />
        {rippleLayer}
      </OverlayContainer>
      <div className="MdcCheckbox-container">
        <div className="MdcCheckbox-icon" />
      </div>
      <input type="checkbox" ref={checkboxRef} disabled={disabled} />
    </div>
  );
};
