import React from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutItemDetails } from "./checkout-item-details";
import { ArrowRight, Package, Truck } from "lucide-react";
import { Button, Skeleton } from "./ui";
import { cn } from "../lib/utils";

interface Props {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

const DELIVERY_PRICE = 20;

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  loading,
  className,
}) => {
  return (
    <WhiteBlock claccName={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col">
        <span className="text-2xl">Итого:</span>
        {loading ? (
          <Skeleton className="h-13" />
        ) : (
          <span className="text-[34px] font-extrabold">
            {(totalAmount + DELIVERY_PRICE).toFixed(2)} P
          </span>
        )}
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={20} className="mr-2 text-gray-400" />
            Стоимость товаров:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="w-15 h-6" />
          ) : (
            `${totalAmount.toFixed(2)} P`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={20} className="mr-2 text-gray-400" />
            Стоимость доставки:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="w-15 h-6" />
          ) : (
            `${DELIVERY_PRICE.toFixed(2)} P`
          )
        }
      />
      <Button
        type="submit"
        disabled={false}
        loading={loading}
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
