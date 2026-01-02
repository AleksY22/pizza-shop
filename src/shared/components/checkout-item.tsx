"use client";
import React from "react";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { cn } from "../lib/utils";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";
import { CartItemInfo } from "./cart-item-details/cart-item-info";
import { CartItemDetailsPrice } from "./cart-item-details/cart-item-details-price";
import { X } from "lucide-react";
import { CountButton } from ".";

interface Props extends CartItemProps {
  className?: string;
  onClickCountButton?: (types: "plus" | "minus") => void;
  onClickRemove?: () => void;
}

export const CheckoutItem: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  disabled,
  className,
  onClickRemove,
  onClickCountButton,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        { "opacity-50 pointer-events-none": disabled },
        className
      )}
    >
      <div className="flex items-center gap-5 flex-1 mr-10">
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>

      <CartItemDetailsPrice value={price} />

      <div className="flex item-center gap-5 ml-20">
        <CountButton onClick={onClickCountButton} value={quantity} />
        <button type="button" onClick={onClickRemove}>
          <X
            className="text-gray-400 cursor-pointer hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};
