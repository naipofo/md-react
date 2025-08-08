import { useContext, useEffect } from "react";
import { ButtonGroupContext } from "./button-group-context";

export const useButtonGroupAware = (
  buttonRef: React.RefObject<HTMLElement | null>,
) => {
  const buttonGroupContext = useContext(ButtonGroupContext);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    if (!buttonGroupContext || !buttonElement) return;
    const onRecalc = () => {
      buttonGroupContext.reportHover(buttonElement);
    };
    buttonElement.addEventListener("pointerdown", onRecalc);
    buttonElement.addEventListener("focusin", onRecalc);
    return () => {
      buttonElement.removeEventListener("pointerdown", onRecalc);
      buttonElement.removeEventListener("focusin", onRecalc);
    };
  }, [buttonGroupContext, buttonRef]);
};
