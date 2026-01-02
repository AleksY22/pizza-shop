import React from "react";
import { cn } from "../lib/utils";
import { CountIconButton } from "@/shared/components";

export interface CountButtonProps {
  value?: number;
  size?: "sm" | "lg";
  className?: string;
  onClick?: (types: "plus" | "minus") => void;
}

export const CountButton: React.FC<CountButtonProps> = ({
  value = 1,
  size = "sm",
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.("minus")}
        disabled={value === 1}
        size={size}
        types="minus"
      />

      <b className={size === "sm" ? "text-sm" : "text-md"}>{value}</b>

      <CountIconButton
        onClick={() => onClick?.("plus")}
        size={size}
        types="plus"
      />
    </div>
  );
};
