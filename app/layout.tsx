import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "md-editor-rt/lib/preview.css";
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/swiper.css";
import "../styles/swiper.i.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGlobalConfig } from "@/lib/globalConfig";
import ToasterContext from "@/context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname, describe } = await fetchGlobalConfig();
  return {
    title: blogname,
    description: describe,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { blogname, describe, bloglogo } = await fetchGlobalConfig();
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <ToasterContext />
        <Header
          blogname={blogname}
          blogsubstring={describe}
          bloglogo={bloglogo}
        />
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
