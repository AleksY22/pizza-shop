import React from "react";
import { CountButtonProps } from "./count-button";
import { Button } from "./ui";
import { cn } from "../lib/utils";
import { Minus, Plus } from "lucide-react";

interface IconButtonProps {
  className?: string;
  size?: CountButtonProps["size"];
  disabled?: boolean;
  types?: "plus" | "minus";
  onClick: () => void;
}
export const CountIconButton: React.FC<IconButtonProps> = ({
  size = "sm",
  disabled,
  types,
  className,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400",
        size === "sm"
          ? "w-[30px] h-[30px] rounded-[10px]"
          : "w-[38px] h-[38px] rounded-md",
        className
      )}
    >
      {types === "plus" ? (
        <Plus className={size === "sm" ? "h-4" : "h-5"} />
      ) : (
        <Minus className={size === "sm" ? "h-4" : "h-5"} />
      )}
    </Button>
  );
};
