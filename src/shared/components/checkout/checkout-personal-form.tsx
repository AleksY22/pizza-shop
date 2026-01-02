import React from "react";
import { WhiteBlock } from "@/shared/components";
import { FormInput } from "@/shared/components/form/form-input";

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональные данные" claccName={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput
          name="firstName"
          label="Имя"
          className="text-base"
          placeholder="Введите имя"
        />
        <FormInput
          name="lastName"
          label="Введите фамилию"
          className="text-base"
          placeholder="Фамилия"
        />
        <FormInput
          name="email"
          label="email"
          className="text-base"
          placeholder="Введите e-mail"
        />
        <FormInput
          name="phone"
          label="Телефон"
          className="text-base"
          placeholder="Введите телефон"
        />
      </div>
    </WhiteBlock>
  );
};
