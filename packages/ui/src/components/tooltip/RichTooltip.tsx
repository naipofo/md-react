import { ReactNode } from "react";
import "./rich-tooltip.scss";

interface RichTooltipProps {
  subhead?: string;
  supportingText?: string;
  children?: ReactNode;
}

// They look a bit differently than the ones from the design doc, but apparenly
// that's also how they look in compose, so i'll leave it for now.

export const RichTooltip = ({
  subhead,
  supportingText,
  children: actions,
}: RichTooltipProps) => {
  return (
    <div className="MdcRichTooltip">
      <div className="MdcRichTooltip-subhead">{subhead}</div>
      <div className="MdcRichTooltip-supporting-text">{supportingText}</div>
      <div className="MdcRichTooltip-actions">{actions}</div>
    </div>
  );
};
