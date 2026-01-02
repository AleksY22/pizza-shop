import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { hashSync } from "bcrypt";
import "dotenv/config";
import { categories, ingredients, products } from "./constants";

//======================================================================
const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 100;
};

//======================================================================

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});
//=======================================================================

export async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@test.com",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@test.com",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d5ed4c9050d84b1932a18396c2e.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Карбонара",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Домашняя",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d5eff9662159465e4d4d2b813ce.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(2, 7),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: pizza1.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 20,
      },
      {
        productId: pizza1.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 30,
      },
      {
        productId: pizza1.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 40,
      },
      {
        productId: pizza1.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 20,
      },
      {
        productId: pizza1.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 30,
      },
      {
        productId: pizza1.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 40,
      },
      {
        productId: pizza2.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 20,
      },
      {
        productId: pizza2.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 30,
      },
      {
        productId: pizza2.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 40,
      },
      {
        productId: pizza2.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 20,
      },
      {
        productId: pizza2.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 30,
      },
      {
        productId: pizza2.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 40,
      },
      {
        productId: pizza3.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 20,
      },
      {
        productId: pizza3.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 30,
      },
      {
        productId: pizza3.id,
        price: randomNumber(15, 60),
        type: 1,
        size: 40,
      },
      {
        productId: pizza3.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 20,
      },
      {
        productId: pizza3.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 30,
      },
      {
        productId: pizza3.id,
        price: randomNumber(15, 60),
        type: 2,
        size: 40,
      },
      //================================
      { productId: 1, price: randomNumber(15, 60) },
      { productId: 2, price: randomNumber(15, 60) },
      { productId: 3, price: randomNumber(15, 60) },
      { productId: 4, price: randomNumber(15, 60) },
      { productId: 5, price: randomNumber(15, 60) },
      { productId: 6, price: randomNumber(15, 60) },
      { productId: 7, price: randomNumber(15, 60) },
      { productId: 8, price: randomNumber(15, 60) },
      { productId: 9, price: randomNumber(15, 60) },
      { productId: 10, price: randomNumber(15, 60) },
      { productId: 11, price: randomNumber(15, 60) },
      { productId: 12, price: randomNumber(15, 60) },
      { productId: 13, price: randomNumber(15, 60) },
      { productId: 14, price: randomNumber(15, 60) },
      { productId: 15, price: randomNumber(15, 60) },
      { productId: 16, price: randomNumber(15, 60) },
      { productId: 17, price: randomNumber(15, 60) },
      { productId: 18, price: randomNumber(15, 60) },
      { productId: 19, price: randomNumber(15, 60) },
      { productId: 20, price: randomNumber(15, 60) },
      { productId: 21, price: randomNumber(15, 60) },
      { productId: 22, price: randomNumber(15, 60) },
      { productId: 23, price: randomNumber(15, 60) },
      { productId: 24, price: randomNumber(15, 60) },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "123123",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "121212",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

export async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

export async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
