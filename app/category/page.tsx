import { FaBookOpen } from "react-icons/fa";
import styles from "./page.module.css";
import CategoryList from "@/components/CategoryList";
import type { Metadata } from "next";
import { fetchGlobalConfig } from "@/lib/globalConfig";
import { FindCategoryList } from "@/lib/BlogFetch";
import DataNull from "@/components/DataNull";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname } = await fetchGlobalConfig();
  return {
    title: blogname + " | 分类",
  };
}

const categoryPage = async () => {
  const List = await FindCategoryList();
  return (
    <>
      {/* 封面图 */}
      <section className={styles.Cover_container}>
        <div className={styles.mask}>
          <h2 className={styles.banner_text}>
            <FaBookOpen className={styles.icons} />
            分类
          </h2>
        </div>
      </section>
      <section className={styles.container}>
        {List.length != 0 ? <CategoryList List={List} /> : <DataNull />}
      </section>
    </>
  );
};

export default categoryPage;
