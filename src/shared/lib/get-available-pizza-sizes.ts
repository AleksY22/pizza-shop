import { ProductItem } from "@/generated/prisma/client";
import { pizzaSizes, PizzaType } from "../constants/pizza";
import { type Variant } from "../components/variants";

export const getAvailablePizzaSizes = (
  items: ProductItem[],
  type: PizzaType
): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.type === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
