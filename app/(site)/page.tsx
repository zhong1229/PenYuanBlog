import type { Metadata } from "next";

import styles from "./page.module.css";
import HomeCardList from "@/components/HomeCardList";
import ImageCardList from "@/components/ImageCardList";
import CommentCardList from "@/components/CommentCardList";

import { FiFileText, FiPackage } from "react-icons/fi";
import Link from "next/link";
import { fetchGlobalConfig } from "@/lib/globalConfig";
import Banner from "@/components/Banner";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname } = await fetchGlobalConfig();

  return {
    title: blogname + " | 主页",
  };
}

export default async function Home() {
  return (
    <>
      <section className={styles.home}>
        <Banner />
      </section>
      <section className={styles.subject}>
        <h5 className={styles.titleContainer}>
          <span>最新文章</span>
          <Link href={"/blog"}>
            <FiFileText />
            全部文章
          </Link>
        </h5>
        <HomeCardList />
      </section>
      <section className={styles.subject}>
        {/* 精选壁纸 */}
        <h5 className={styles.titleContainer}>
          <span>精选壁纸</span>
          <Link href={"/images"}>
            <FiPackage />
            全部图片
          </Link>
        </h5>
        <ImageCardList type="0" />
      </section>
      <section className={styles.subject} style={{ display: "none" }}>
        <h5 className={`${styles.titleContainer}`}>
          <span>走心评论</span>
        </h5>
        <CommentCardList />
      </section>
    </>
  );
}
