"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  formRegisterSchema,
  TFormRegisterValues,
} from "./modals/auth/forms/schemas";
import { User } from "@/generated/prisma/client";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { Container } from "./container";
import { Title } from "./title";
import { FormInput } from "./form/form-input";
import { Button } from "./ui";
import { updateUserInfo } from "@/app/actions";

interface Props {
  data: User;
}
export const ProfileForm: React.FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success("Данные обновлены");
    } catch (error) {
      console.log(error);
      return toast.error("Ошибка при обновлении данных");
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };
  return (
    <Container className="my-10">
      <Title text="Личные данные" size="md" className="font-bold" />
      <FormProvider {...form}>
        <form
          className="flex flex-col gap-5 w-96 mt-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="e-mail" requered />
          <FormInput name="fullName" label="Полное имя" requered />
          <FormInput
            name="password"
            type="password"
            label="Новый пароль"
            requered
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Повторите пароль"
            requered
          />
          <Button
            disabled={form.formState.isSubmitting}
            className="text-base mt-10"
            type="submit"
          >
            Сохранить
          </Button>
          <Button
            onClick={onClickSignOut}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button"
          >
            Выйти
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
