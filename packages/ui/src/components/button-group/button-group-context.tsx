import { createContext } from "react";

export const ButtonGroupContext = createContext<null | {
  reportHover: (element: HTMLElement) => void;
}>(null);
