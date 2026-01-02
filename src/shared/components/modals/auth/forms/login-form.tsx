import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formLodinSchema, TFormLoginValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "@/shared/components/title";
import Image from "next/image";
import { FormInput } from "@/shared/components/form/form-input";
import { Button } from "@/shared/components/ui";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLodinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        return toast.error(
          "Не удалось войти в аккаунт! Такого пользователя не существует или почта не подтверждена!"
        );
      }

      toast.success("Вы успешно вошли в аккаунт");
      onClose?.();
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Не удалось войти в аккаунт!");
    }
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Вход в аккаунт" size="md" className="font-bold" />
            <p className="text-gray-400">
              Введите свою почту, чтобы войти в свой аккаунт
            </p>
          </div>
          <Image
            src="/assets/images/phone-icon.png"
            alt="phone-icon"
            width={60}
            height={60}
          />
        </div>
        <FormInput
          name="email"
          label="e-mail"
          placeholder="Введите email"
          requered
        />
        <FormInput
          name="password"
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          requered
        />
        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
