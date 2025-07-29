"use client";

import { ReactNode } from "react";

import "./badge.scss";

interface BadgeProps {
  children: ReactNode;
  /**
   * Maximum 4 characters
   */
  badge?: ReactNode;
}

export const Badge = ({ children, badge }: BadgeProps) => {
  return (
    <div className="MdcBadge">
      <div className="MdcBadge-badge">{badge}</div>
      {children}
    </div>
  );
};
