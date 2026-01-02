"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";

import { Button } from "./ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "../lib/get-cart-item-details";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { declOfNum } from "../lib/decl-of-num";
import { Title } from "./title";
import { cn } from "../lib/utils";
import { useCart } from "../hooks";
import { ApiRoutes } from "../services/api-routes";
import { useState } from "react";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();
  const [redirecting, setRedirecting] = useState(false);

  const titleQuantity = declOfNum(items.length, ["товар", "товара", "товаров"]);

  const isDisabled = Boolean(!totalAmount);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle>
            В корзине{" "}
            <span className="font-bold">
              {items.length} {titleQuantity}
            </span>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription aria-describedby={undefined} />
        <div
          className={cn(
            "flex flex-col h-full",
            !totalAmount && "justify-center"
          )}
        >
          {!totalAmount && (
            <div
              className={cn(
                "flex flex-col items-center justify-center mx-auto",
                !totalAmount && "flex-[1_1_auto]"
              )}
            >
              <Image
                src="/assets/images/empty-box.png"
                alt="empty-cart"
                width={120}
                height={120}
              />
              <Title
                size="sm"
                text="Корзина пуста"
                className="text-center font-bold my-2"
              />
            </div>
          )}

          {!isDisabled && (
            <div className="-mx-6 mt-5 overflow-auto flex-1">
              {items.map((item) => (
                <div key={item.id} className="mb-2">
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={getCartItemDetails(
                      item.ingredients,
                      item.pizzaType as PizzaType,
                      item.pizzaSize as PizzaSize
                    )}
                    disabled={item.disabled}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onClickCountButton={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
                    onClickRemove={() => removeCartItem(item.id)}
                  />
                </div>
              ))}
            </div>
          )}

          <SheetFooter className="-mx-6 bg-white p-8 justify-end">
            <div className="w-full">
              <div className="flex mb-4">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                </span>
                <div className="font-bold text-lg">
                  {totalAmount.toFixed(2)}
                </div>
              </div>
              <Link
                href={ApiRoutes.CHECKOUT}
                className={
                  isDisabled ? "pointer-events-none cursor-not-allowed" : ""
                }
              >
                <Button
                  onClick={() => setRedirecting(true)}
                  loading={redirecting}
                  disabled={isDisabled}
                  type="submit"
                  className="w-full h-12 text-base"
                >
                  Оформить заказ
                  <ArrowRight className="w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
