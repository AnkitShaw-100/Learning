import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/HOC/Provider";
import "./globals.css";

const font = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food landing page",
  description: "A simple food landing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
