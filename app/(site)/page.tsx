import type { Metadata } from "next";

import styles from "./page.module.css";
import HomeCardList from "@/components/HomeCardList";
import ImageCardList from "@/components/ImageCardList";
import CommentCardList from "@/components/CommentCardList";

import { FiFileText, FiPackage } from "react-icons/fi";
import Link from "next/link";
import Banner from "@/components/Swiper";
import { fetchGlobalConfig } from "@/lib/globalConfig";
import { fetchBlog, fetchCarousel } from "@/lib/HomeFetch";
import DataNull from "@/components/DataNull";
import { findImageList } from "@/lib/ImageFetch";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname } = await fetchGlobalConfig();

  return {
    title: blogname + " | 主页",
  };
}

export default async function Home() {
  const cData = await fetchCarousel();
  const Post = await fetchBlog();
  const ImageList = await findImageList();
  return (
    <>
      <section className={styles.home}>
        <Banner List={cData} />
      </section>
      <section className={styles.subject}>
        <h5 className={styles.titleContainer}>
          <span>最新文章</span>
          <Link href={"/blog"}>
            <FiFileText />
            全部文章
          </Link>
        </h5>
        {Post.length != 0 ? <HomeCardList List={Post} /> : <DataNull />}
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
        {ImageList.length != 0 ? (
          <ImageCardList List={ImageList} />
        ) : (
          <DataNull />
        )}
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
