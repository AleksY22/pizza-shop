import { ApiRoutes } from "./api-routes";
import { axiosInstance } from "./instance";
import { CartDto, CreateCartItemValues } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDto> => {
  const res = await axiosInstance.get<CartDto>(ApiRoutes.CART);
  return res.data;
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDto> => {
  const { data } = await axiosInstance.patch<CartDto>(
    ApiRoutes.CART + "/" + itemId,
    {
      quantity,
    }
  );

  return data;
};

export const removeCartItem = async (id: number): Promise<CartDto> => {
  const { data } = await axiosInstance.delete<CartDto>(
    ApiRoutes.CART + "/" + id
  );

  return data;
};

export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDto> => {
  const { data } = await axiosInstance.post<CartDto>(ApiRoutes.CART, values);

  return data;
};
