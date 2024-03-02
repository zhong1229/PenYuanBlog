import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { formatDaysAgo } from "@/utils";

export interface BlogItem {
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
  cat: any; // 使用 Cat 类型
  catName: string;
}

const HomeCard = ({ item }: { item: BlogItem }) => {
  return (
    <div className={styles.container}>
      <Link href={`/blog/${item.id}`} className={styles.aLink}>
        <Image
          src={item.cover}
          alt="http://cdn.risingsource.top/blog/catIcon/cat1.png"
          fill
          sizes="100"
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <div className={styles.header}>
          <h6 className={styles.title}>
            <Link href={`/blog/${item.id}`}> {item.title}</Link>
          </h6>
        </div>
        <div className={styles.dec_container}>
          <p>{item.synopsis}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.mark}>
            <div className={styles.left}>
              <Link href={`/blog?cat=${item.catName}`} className={styles.tag}>
                <i className="iconfont icon-24gf-tags2"></i>
                {item.catName}
              </Link>
              <span className={styles.tag_list}>
                {item.tags.split(",").map((item, index) => (
                  <Link href={`/blog?tag=${item}`} key={index}>
                    <i className="iconfont icon-jinghao"></i>
                    {item}
                  </Link>
                ))}
              </span>
            </div>
            <span className={styles.timer}>
              {formatDaysAgo(item.creationtime)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
