import { Product } from "@/generated/prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./api-routes";

export const search = async (query: string): Promise<Product[]> => {
  const res = await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
    params: { query },
  });

  return res.data;
};
