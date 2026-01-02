import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from ".";
import { Button } from "./ui";
import { Plus } from "lucide-react";
import { Ingredient } from "@/generated/prisma/client";

interface Props {
  id: number;
  name: string;
  price: number;
  ingredients?: Ingredient[];
  imageUrl?: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
}) => {
  return (
    <div className="flex">
      <Link href={`/product/${id}`} className="flex">
        <div className="flex flex-col">
          <div className="flex justify-center items-center p-6 bg-secondary rounded-lg h-[260px]">
            <Image
              src={imageUrl ? imageUrl : ""}
              alt={name}
              className="w-auto"
              width={220}
              height={220}
            />
          </div>

          <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
          <p className="text-sm text-gray-400 flex-[1_1_auto]">
            {ingredients?.map((ingredient) => ingredient.name).join(", ")}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-[20px]">
              от <b>{price} P</b>
            </span>
            <Button variant="secondary" className="text-base font-bold">
              <Plus size={20} className="mr-1" />
              Добавить
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
