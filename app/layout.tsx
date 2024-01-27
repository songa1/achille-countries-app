import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "An app made by Cishahayo Songa Achille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <StoreProvider>
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </StoreProvider>
      </AntdRegistry>
    </html>
  );
}
