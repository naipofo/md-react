import "./plain-tooltip.scss";

interface PlainTooltipProps {
  supportingText: string;
}

export const PlainTooltip = ({ supportingText }: PlainTooltipProps) => {
  return <div className="MdcPlainTooltip">{supportingText}</div>;
};
