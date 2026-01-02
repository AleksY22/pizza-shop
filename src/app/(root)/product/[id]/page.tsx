import { Container, ProductForm } from "@/shared/components";
import prisma from "@/shared/lib/prisma";

import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      // можно сделать отдельным запросом
      //чтобы не перегружать загрузку страницы
      //================================================
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      //==================================================
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
}
