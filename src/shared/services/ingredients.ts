import { Ingredient } from "@/generated/prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./api-routes";

export const getAll = async (): Promise<Ingredient[]> => {
  const res = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);

  return res.data;
};
