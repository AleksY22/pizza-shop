interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export function PaymentOrderTemplate({
  orderId,
  totalAmount,
  paymentUrl,
}: Props) {
  return (
    <div>
      <h1>Заказ #{orderId}</h1>

      <p>
        К оплате <b>{totalAmount.toFixed(2)}</b> BYN
      </p>
      <p>
        Перейдите <a href={paymentUrl}>по ссылке</a> для оплаты
      </p>
    </div>
  );
}
