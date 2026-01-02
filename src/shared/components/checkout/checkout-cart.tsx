import React from "react";
import { WhiteBlock, CheckoutItem } from "@/shared/components";
import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { CartStateItem } from "@/shared/lib/get-cart-details";

interface Props {
  items: CartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    types: "plus" | "minus"
  ) => void;
  removeCartItem: (id: number) => void;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
  items,

  onClickCountButton,
  removeCartItem,
  className,
}) => {
  return (
    <WhiteBlock title="1. Корзина" claccName={className}>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.id}>
            <CheckoutItem
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              disabled={item.disabled}
              details={getCartItemDetails(
                item.ingredients,
                item.pizzaType as PizzaType,
                item.pizzaSize as PizzaSize
              )}
              onClickCountButton={(types) =>
                onClickCountButton(item.id, item.quantity, types)
              }
              onClickRemove={() => removeCartItem(item.id)}
            />
            <div className="border-b pt-2"></div>
          </div>
        ))}
      </div>
    </WhiteBlock>
  );
};
