import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formRegisterSchema, TFormRegisterValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "@/shared/components/title";
import Image from "next/image";
import { FormInput } from "@/shared/components/form/form-input";
import { Button } from "@/shared/components/ui";
import toast from "react-hot-toast";
import { registerUser } from "@/app/actions";

interface Props {
  onClose?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success("Регистрация прошла успешно. Подтвердите свою почту.");
      onClose?.();
    } catch (error) {
      console.error("Error [REGISTER]", error);
      return toast.error("Не удалось зарегистрироваться.");
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
            <Title text="Регистрация" size="md" className="font-bold" />
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
          name="fullName"
          label="Полное имя"
          placeholder="Введите имя и фамилию"
          requered
        />
        <FormInput
          name="password"
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          requered
        />
        <FormInput
          name="confirmPassword"
          label="Подтвердите пароль"
          type="password"
          placeholder="Подтвердите пароль"
          requered
        />
        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};
