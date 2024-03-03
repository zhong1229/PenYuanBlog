import ImageCardList from "@/components/ImageCardList";
import styles from "./index.module.css";

import type { Metadata } from "next";
import { fetchGlobalConfig } from "@/lib/globalConfig";
import { findImageList } from "@/lib/ImageFetch";
import DataNull from "@/components/DataNull";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname } = await fetchGlobalConfig();
  return {
    title: blogname + " | 壁纸",
  };
}

const ImagePage = async () => {
  const List = await findImageList();

  return (
    <>
      <section className={styles.container}>
        <ImageCardList type="1" />
      </section>
    </>
  );
};

export default ImagePage;
