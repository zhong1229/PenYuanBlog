import { FaBookOpen } from "react-icons/fa";
import styles from "./page.module.css";
import CategoryList from "@/components/CategoryList";

export const metadata = {};

const categoryPage = () => {
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
        <CategoryList />
      </section>
    </>
  );
};

export default categoryPage;
