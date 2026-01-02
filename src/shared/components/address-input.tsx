"use client";

import React, { useId } from "react";
import { AddressSuggestions } from "react-dadata";

import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

const API_KEY = "1c6324e2934600327b6b56cd0f3915d4f5274258";

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  const id = useId();

  return (
    <AddressSuggestions
      uid={id}
      token={API_KEY}
      onChange={(data) => onChange?.(data?.value)}
      inputProps={{
        placeholder: "Начните вводить адрес...",
      }}
    />
  );
};
