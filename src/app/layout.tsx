import type { Metadata } from "next";
import "./globals.scss";
import { Provider } from "@/context/Provider";

export const metadata: Metadata = {
  title: "FIAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
