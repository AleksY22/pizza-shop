import { CartDto } from "../services/dto/cart.dto";
import { calcCartTotalPrice } from "./calc-cart-total-price";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl?: string;
  price: number;
  disabled?: boolean;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  items?: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDto): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    disabled: false,
    price: calcCartTotalPrice(item),
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.type,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  })) as CartStateItem[];

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
