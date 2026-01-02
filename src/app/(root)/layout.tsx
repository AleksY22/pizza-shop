import type { Metadata } from "next";
import { Header } from "@/shared/components/header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pizza",
  description: "online shop pizza",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header hasSearch={true} hasCart={true} />
      </Suspense>
      {children}
      {modal}
    </main>
  );
}
