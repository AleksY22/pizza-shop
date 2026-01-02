"use client";

import React from "react";
import { Title } from "./title";
import { CheckboxFiltersGroup } from ".";
import { Input } from "./ui";
import { RangeSlider } from ".";
import { useFilters, useIngredients, useQueryFilters } from "@/shared/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (price: number[]) => {
    filters.setPrice("priceFrom", price[0]);
    filters.setPrice("priceTo", price[1]);
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <CheckboxFiltersGroup
        title="Тип теста"
        name="type"
        className="mt-5"
        selectedValues={filters.type}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
        onClickCheckbox={filters.setType}
      />
      <CheckboxFiltersGroup
        title="Размеры"
        name="size"
        className="mt-5"
        selectedValues={filters.size}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickCheckbox={filters.setSize}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            name="price-from"
            placeholder="0"
            min={0}
            max={100}
            value={String(filters.price.priceFrom || 0)}
            onChange={(e) =>
              filters.setPrice("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            name="price-to"
            min={5}
            max={100}
            placeholder="100"
            value={String(filters.price.priceTo || 100)}
            onChange={(e) =>
              filters.setPrice("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={100}
          step={5}
          value={[filters.price.priceFrom || 0, filters.price.priceTo || 100]}
          onValueChange={updatePrice}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={4}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedValues={filters.selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
