import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Category } from "@/generated/prisma/client";

interface Props {
  classname?: string;
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({ categories, classname }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-3 shadow-lg shadow-black/5 z-10",
        classname
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
