import { ReactNode } from "react";

import "./overlay-container.scss";

export const OverlayContainer = ({ children }: { children: ReactNode }) => (
  <div className="MdcOverlayContainer">{children}</div>
);
