import TgaList from "@/components/TagList";
import styles from "./index.module.css";
import { FaBookOpen } from "react-icons/fa";

import type { Metadata } from "next";
import { fetchGlobalConfig } from "@/lib/globalConfig";
import DataNull from "@/components/DataNull";
import { FindTagsList } from "@/lib/BlogFetch";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname } = await fetchGlobalConfig();
  return {
    title: blogname + " | 标签",
  };
}

const TagsPage = async () => {
  const List = await FindTagsList();
  return (
    <>
      {/* 封面图 */}
      <section className={styles.Cover_container}>
        <div className={styles.mask}>
          <h2 className={styles.banner_text}>
            <FaBookOpen className={styles.icons} />
            标签
          </h2>
        </div>
      </section>
      <section className={styles.container}>
        {List.length != 0 ? <TgaList List={List} /> : <DataNull />}
      </section>
    </>
  );
};

export default TagsPage;
