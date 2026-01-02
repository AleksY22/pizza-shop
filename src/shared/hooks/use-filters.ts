import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useState } from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  type: string;
  size: string;
  ingredients: string;
}

export interface Filters {
  size: Set<string>;
  type: Set<string>;
  selectedIngredients: Set<string>;
  price: PriceProps;
}

interface ReturnProps extends Filters {
  setPrice: (name: keyof PriceProps, value: number) => void;
  setType: (value: string) => void;
  setSize: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  //Фильтр ингредиентов
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  //Фильтр размера
  const [size, { toggle: toggleSize }] = useSet(
    new Set<string>(
      searchParams.get("size") ? searchParams.get("size")?.split(",") : []
    )
  );

  //Фильтр теста
  const [type, { toggle: toggleType }] = useSet(
    new Set<string>(
      searchParams.get("type") ? searchParams.get("type")?.split(",") : []
    )
  );

  //Фильтр цены
  const [price, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const changePrice = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    size,
    type,
    price,
    selectedIngredients,
    setPrice: changePrice,
    setType: toggleType,
    setSize: toggleSize,
    setSelectedIngredients: toggleIngredients,
  };
};
