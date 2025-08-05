import "./fab-menu.scss";
import { ReactNode } from "react";
import { FabMenuCloseButton } from "./FabMenuCloseButton";

interface FabMenuProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

export const FabMenu = ({ children, variant = "primary" }: FabMenuProps) => {
  const classNames = ["MdcFabMenu"];
  classNames.push(`MdcButton-${variant}`);

  return (
    <div className={classNames.join(" ")}>
      <div className="MdcFabMenu-items">{children}</div>
      <FabMenuCloseButton variant={variant} />
    </div>
  );
};
