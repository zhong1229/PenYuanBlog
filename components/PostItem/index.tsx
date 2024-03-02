import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { formatDaysAgo } from "@/utils";

interface Category {
  id: number;
  name: string;
  synopsis: string;
  creationtime: string;
  updatetime: string;
}

export interface Article {
  id: number;
  title: string;
  cover: string;
  synopsis: string;
  tags: string;
  status: string;
  content: string;
  pageview: number;
  count: number;
  creationtime: string;
  updatetime: string;
  cid: number;
  websiteSettingId: number;
  cat: Category;
}

const PostListItem = ({ item }: { item: Article }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image src={item.cover} alt="" fill className={styles.image} />
      </div>
      <div className={styles.info}>
        <Link href={`/blog/${item.id}`} className={styles.title}>
          {item.title}
        </Link>
        <p className={styles.content}>{item.synopsis}</p>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Link href={`/blog?cat=${item.cat.name}`}>
              <span className="iconfont icon-24gf-tags2">{item.cat.name}</span>
            </Link>
          </div>
          {item.tags.split(",").map((item) => (
            <div className={styles.icon} key={item}>
              <Link href={`/blog?tag=${item}`}>
                <span className="iconfont icon-jinghao">{item}</span>
              </Link>
            </div>
          ))}
          <span>{formatDaysAgo(item.creationtime)}</span>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
