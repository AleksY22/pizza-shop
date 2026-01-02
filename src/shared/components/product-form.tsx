"use client";

import React from "react";
import { useCartStore } from "../store/cart";
import toast from "react-hot-toast";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "./choose-pizza-form";
import { ChooseProductForm } from "./choose-product-form";
import { useRouter } from "next/navigation";

interface Props {
  product: ProductWithRelations;
}

export const ProductForm: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const loading = useCartStore((state) => state.loading);
  const addCartItem = useCartStore((state) => state.addCartItem);

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.type);

  const onAddProduct = async (
    productItemId?: number,
    ingredients?: number[]
  ) => {
    try {
      // if (isPizzaForm) {
      //   await addCartItem({
      //     productItemId,
      //     ingredients,
      //   });
      // } else {
      //   await addCartItem({
      //     productItemId: firstItem.id,
      //   });
      // }
      //Альтернативный код
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success("Товар добавлен в корзину");
    } catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.log(error);
    } finally {
      router.back();
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        onSubmit={onAddProduct}
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      onSubmit={onAddProduct}
      imageUrl={product.imageUrl}
      name={product.name}
      price={firstItem.price}
      loading={loading}
    />
  );
};
