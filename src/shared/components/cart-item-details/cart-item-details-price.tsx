import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
  value: number;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ className, value }) => {
  return <h2 className={cn("font-bold", className)}>{value.toFixed(2)}</h2>;
};
