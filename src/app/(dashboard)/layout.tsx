import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza",
  description: "online shop pizza",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      Dashboard
      {children}
    </main>
  );
}
