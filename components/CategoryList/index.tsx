import Link from "next/link";
import styles from "./index.module.css";
import { FindCategoryList } from "@/lib/BlogFetch";

interface Category {
  id: number;
  name: string;
  synopsis: string;
  creationtime: string;
  updatetime: string;
  articleCount: number;
}

const CategoryList = async ({ List }: { List: Category[] }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.boiled}>
        {List?.map((item: Category) => (
          <li className={styles.boiled_item} key={item.id}>
            <Link href={`/blog?cat=${item.name}`} className={styles.title}>
              {item.name}
              <span
                className={`iconfont icon-arrow-right ${styles.iconfont}`}
              ></span>
            </Link>
            <Link
              href={`/blog?cat=${item.name}`}
              className={styles.category_count}
            >
              <span className="iconfont icon-wenzhang"></span>
              <span className={styles.small}>{item.articleCount}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
