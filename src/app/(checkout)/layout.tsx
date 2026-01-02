import { Header } from "@/shared/components/header";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pizza",
  description: "online shop pizza",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#f4f1ee]">
      <Suspense>
        <Header className="border-gray-200" />
      </Suspense>
      {children}
    </main>
  );
}
