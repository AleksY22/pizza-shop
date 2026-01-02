//Ответ от yookassa о статусе платежа

import { PaymentCallbackData } from "@/@types/yookassa";
import { OrderStatus } from "@/generated/prisma/enums";
import { SuccessOrderTemplate } from "@/shared/components/email-templates/success-order";
import prisma from "@/shared/lib/prisma";
import { sendEmail } from "@/shared/lib/send-email";
import { CartItemDto } from "@/shared/services/dto/cart.dto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //указать в кабинете магазина yookassa путь отправки ответа о платеже
  //для dev localhost использовать ресурс localtunnel
  //npm install -g localtunnel
  //lt --port 3000
  //который предаставляет ссылку
  //https://funny-nights-count.loca.lt
  //добавляем путь
  //https://funny-nights-count.loca.lt/api/checkout/callback

  try {
    //ответ от yookassa
    const body = (await req.json()) as PaymentCallbackData;
    console.log(body);

    //поиск этого заказа в БД
    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" });
    }

    const isSucceeded = body.object.status === "succeeded";

    //изменение статуса заказа в БД
    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    const items = JSON.parse(
      order?.items as unknown as string
    ) as CartItemDto[];

    if (isSucceeded) {
      await sendEmail(
        order.email,
        "Payment PizzaShop / заказ успешно оформлен",
        SuccessOrderTemplate({ orderId: order.id, items })
      );
    } else {
      //Письмо о неуспешной оплате
      console.log("Оплата не прошла!");
    }
  } catch (error) {
    console.log("[Checkout Callback] Error:", error);
    return NextResponse.json({ error: "Server error" });
  }
}
