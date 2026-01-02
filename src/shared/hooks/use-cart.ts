/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useCartStore } from "../store/cart";
import { CartStateItem } from "../lib/get-cart-details";
import { CreateCartItemValues } from "../services/dto/cart.dto";

type ReurnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReurnProps => {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const loading = useCartStore((state) => state.loading);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const items = useCartStore((state) => state.items);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const addCartItem = useCartStore((state) => state.addCartItem);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return {
    totalAmount,
    items,
    loading,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
  };
};
