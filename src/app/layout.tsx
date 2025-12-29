import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NewsHub - Excelência em Jornalismo Independente",
  description: "Portal de notícias com as últimas atualizações em tecnologia, economia, política e mais.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow max-w-6xl mx-auto px-3 sm:px-4 md:px-6 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}