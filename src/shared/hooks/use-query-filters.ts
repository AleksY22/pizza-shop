import { useRouter } from "next/navigation";
import { Filters } from "./use-filters";
import qs from "qs";
import { useEffect, useRef } from "react";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted) {
      const params = {
        ...filters.price,
        type: Array.from(filters.type),
        size: Array.from(filters.size),
        ingredients: Array.from(filters.selectedIngredients),
      };

      //преобразование данных в строку запроса (библиотека qs)
      const query = qs.stringify(params, {
        arrayFormat: "comma",
      });

      //вшиваем в строку запроса фильтрацию
      router.push(`?${query}`, {
        scroll: false,
      });
    }

    isMounted.current = true;
  }, [
    filters.type,
    filters.size,
    filters.selectedIngredients,
    filters.price,
    router,
  ]);
};
