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
import HeaderContainer from "@/components/HeaderContainer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname, describe } = await fetchGlobalConfig();
  return {
    description: describe,
    generator: "Next.js",
    applicationName: blogname,
    referrer: "origin-when-cross-origin",
    keywords: [blogname],
    authors: [{ name: "鹏小渊", url: "http://blog.risingsource.top/" }],
    creator: "鹏小渊",
    publisher: "鹏小渊",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <ToasterContext />
        <HeaderContainer />
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
