import { CartItemDto } from "@/shared/services/dto/cart.dto";

interface Props {
  orderId: number;
  items: CartItemDto[];
}

export function SuccessOrderTemplate({ orderId, items }: Props) {
  return (
    <div>
      <h1>Cпасибо за покупку!</h1>

      <p>
        Ваш заказ <b>{orderId}</b> оплачен. Список товаров:
      </p>
      <hr />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.productItem.product.name} - {item.productItem.price} P x{" "}
            {item.quantity} шт. = {item.productItem.price * item.quantity} P
          </li>
        ))}
      </ul>
    </div>
  );
}
