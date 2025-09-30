import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@providers/theme-provider";
import { Layout } from "@widgets/Layout";
import { PhotoContainerProvider } from "@modules/photo";
import { QueryProvider } from "@providers/query-provider";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo library",
  description: "Приложение для хранения фотографий",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <QueryProvider>
            <PhotoContainerProvider>
              <Layout>
                {children}
              </Layout>
            </PhotoContainerProvider>
          </QueryProvider>  
        </ThemeProvider>
      </body>
    </html>
  );
}
