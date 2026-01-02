/* eslint-disable @next/next/no-img-element */
import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
  src?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return (
    <img
      className={cn("w-[60px] h-[60px]", className)}
      src={src}
      alt="product"
    />
  );
};
