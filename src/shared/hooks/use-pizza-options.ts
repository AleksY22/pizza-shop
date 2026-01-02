/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import type { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "../lib/get-available-pizza-sizes";
import { type ProductItem } from "@/generated/prisma/client";
import { type Variant } from "../components/variants";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  availablePizzaSizes: Variant[];
  currentItemId?: number;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const availablePizzaSizes = getAvailablePizzaSizes(items, type);

  const currentItemId = items.find(
    (item) => item.type === type && item.size === size
  )?.id;

  useEffect(() => {
    const isAvailableSize = availablePizzaSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);
    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type, availablePizzaSizes, size]);

  return {
    size,
    type,
    selectedIngredients,
    availablePizzaSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  };
};
