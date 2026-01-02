import { z } from "zod";

export const formLodinSchema = z.object({
  email: z.email({ message: "Введите корректную почту" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать не менее 6 символов" }),
});

export const formRegisterSchema = z
  .object({
    email: z.email({ message: "Введите корректную почту" }),
    fullName: z
      .string()
      .min(3, { message: "Поле должно содержать не менее 3 символов" }),
    password: z
      .string()
      .min(6, { message: "Пароль должен содержать не менее 6 символов" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Пароль должен содержать не менее 6 символов" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type TFormLoginValues = z.infer<typeof formLodinSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
