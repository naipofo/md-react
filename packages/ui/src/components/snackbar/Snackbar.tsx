import { ReactNode } from "react";
import "./snackbar.scss";

interface SnackbarProps {
  label: string;
  children?: ReactNode;
}

// TODO: close icon?
// It's in the tokens but I haven't really seen it used anywhere

export const Snackbar = ({ label, children: actions }: SnackbarProps) => {
  return (
    <div className="MdcSnackbar">
      <div className="MdcSnackbar-label">{label}</div>
      <div className="MdcSnackbar-action">{actions}</div>
    </div>
  );
};
