"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "./ui";
import { PizzaImage, Variants, IngredientItem } from "@/shared/components";
import { type PizzaSize, type PizzaType, pizzaTypes } from "../constants/pizza";
import { Ingredient, ProductItem } from "@/generated/prisma/client";
import { usePizzaOptions } from "../hooks";
import { getPizzaDetails } from "../lib/get-pizza-details";

interface Props {
  imageUrl?: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  loading,
  onSubmit,
  className,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    currentItemId,
    setSize,
    setType,
    availablePizzaSizes,
    addIngredient,
  } = usePizzaOptions(items);

  const { textDetaills, totalPrice } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <div className="flex flex-col gap-4 mt-5">
          <Variants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <Variants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 mt-5 rounded-md h-[420px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3 mt-2">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 mt-10 text-base rounded-[18px] w-full"
          loading={loading}
        >
          Добавить в корзину за {totalPrice} P
        </Button>
      </div>
    </div>
  );
};
