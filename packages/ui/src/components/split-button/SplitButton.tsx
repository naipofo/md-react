import { ReactNode } from "react";
import { Button } from "../button/Button";

import "./split-button.scss";

interface SplitButtonProps {
  children: ReactNode;
  disabled?: boolean;
  variant?: "elevated" | "filled" | "tonal" | "outlined";
  size?: "x-small" | "small" | "medium" | "large" | "x-large";
  selected?: boolean;
  startIcon?: string;
}

export const SplitButton = ({
  children,
  disabled = false,
  variant = "filled",
  size = "small",
  selected = false,
  startIcon,
}: SplitButtonProps) => {
  const classNames = ["MdcSplitButton"];

  classNames.push(`MdcSplitButton-${size.replace("-", "")}`);
  classNames.push(`MdcSplitButton-${variant}`);
  if (selected) {
    classNames.push("MdcSplitButton-selected");
  }

  return (
    <div className={classNames.join(" ")}>
      <Button
        startIcon={startIcon}
        size={size}
        variant={variant}
        shape="round"
        disabled={disabled}
      >
        {children}
      </Button>
      <Button
        size={size}
        variant={variant}
        disabled={disabled}
        // animation will be added in the future with a new icon interface
        startIcon={
          selected
            ? "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
            : "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
        }
      />
    </div>
  );
};
