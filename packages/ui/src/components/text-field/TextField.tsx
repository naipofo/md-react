"use client";

import { useRef } from "react";

import "./text-field.scss";
import { useButtonGroupAware } from "../button-group/useButtonGroupAware";
import { FocusRing } from "../focus-ring/FocusRing";
import { StateLayer } from "../../component-utils/state-layer/StateLayer";
import { OverlayContainer } from "../../component-utils/overlay-container/OverlayContainer";

// TODO: prefix/suffix
// TODO: placeholder
// TODO: icons
interface TextFieldProps {
  labelText?: string;
  placeholder?: string;
  supportingTextStart?: string;
  supportingTextEnd?: string;
  disabled?: boolean;
  variant?: "filled" | "outlined";
  startIcon?: string;
  endIcon?: string;
  hasError?: boolean;
}

export const TextField = ({
  labelText,
  supportingTextStart,
  supportingTextEnd,
  disabled = false,
  variant = "filled",
  startIcon = undefined,
  endIcon = undefined,
  hasError = false,
  placeholder = " ",
}: TextFieldProps) => {
  const textFieldRef = useRef(null);
  useButtonGroupAware(textFieldRef);

  const classNames = ["MdcTextField"];

  classNames.push(`MdcTextField-${variant}`);

  if (disabled) {
    classNames.push("MdcTextField-disabled");
  }
  if (hasError) {
    classNames.push("MdcTextField-error");
  }

  return (
    <div className={classNames.join(" ")} ref={textFieldRef}>
      <FocusRing />
      <div className="MdcTextField-input-container">
        {variant === "outlined" && (
          <>
            <div className="MdcTextField-top-border-container">
              <div
                className="MdcTextField-label-border-animation"
                aria-hidden="true"
              >
                {labelText}
              </div>
            </div>
            <div className="MdcTextField-border" />
          </>
        )}
        {variant === "filled" && (
          <>
            <OverlayContainer>
              <StateLayer />
            </OverlayContainer>
            <div className="MdcTextField-active-indicator" />
          </>
        )}
        <label className="MdcTextField-label-visible">{labelText}</label>
        {startIcon && (
          <svg viewBox="0 0 24 24" className="MdcTextField-icon">
            <path fill="currentColor" d={startIcon} />
          </svg>
        )}

        <input type="text" disabled={disabled} placeholder={placeholder} />

        {endIcon && (
          <svg viewBox="0 0 24 24" className="MdcTextField-icon">
            <path fill="currentColor" d={endIcon} />
          </svg>
        )}
      </div>
      {(supportingTextStart || supportingTextEnd) && (
        <div className="MdcTextField-supporting-text-container">
          {supportingTextStart && <div>{supportingTextStart}</div>}
          {supportingTextEnd && <div>{supportingTextEnd}</div>}
        </div>
      )}
    </div>
  );
};
