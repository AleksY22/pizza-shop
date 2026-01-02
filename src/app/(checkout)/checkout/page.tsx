"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSidebar, Container, Title } from "@/shared/components";
import { useCart } from "@/shared/hooks";
import {
  CheckoutAddressForm,
  CheckoutCart,
  checkoutFormSchema,
  CheckoutFormValues,
  CheckoutPersonalForm,
} from "@/shared/components/checkout";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import { useState } from "react";

export default function CheckoutPage() {
  const [submitting, setSubmitting] = useState(false);
  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
    useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);

      toast.success("Заказ успешно оформлен! Переход на страницу оплаты...");

      if (url) {
        // eslint-disable-next-line react-hooks/immutability
        location.href = url;
      }
    } catch (error) {
      setSubmitting(false);
      toast.error("Не удалось создать заказ");
      console.log(error);
    }
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    types: "plus" | "minus"
  ) => {
    const newQuantity = types === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  return (
    <Container className="mt-5 pb-10">
      <Title
        text="Оформление заказа"
        size="xl"
        className="font-extrabold mb-8"
      />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Левая */}
            <div className="flex flex-col gap-10 flex-1 bm-20">
              <CheckoutCart
                className={loading ? "opacity-40 pointer-events-none" : ""}
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />

              <CheckoutPersonalForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />

              <CheckoutAddressForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
            </div>

            {/* Правая */}
            <div className="w-[450px]">
              <CheckoutSidebar
                className={loading ? "opacity-40 pointer-events-none" : ""}
                totalAmount={totalAmount}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
