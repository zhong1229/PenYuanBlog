import PostListItem, { Article } from "@/components/PostItem";
import styles from "./index.module.css";
import Pagination from "@/components/Pagination";
import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import { fetchGlobalConfig } from "@/lib/globalConfig";
import type { Metadata } from "next";
import { FindBlogList } from "@/lib/BlogFetch";
import DataNull from "@/components/DataNull";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname } = await fetchGlobalConfig();
  return {
    title: blogname + " | 博客",
  };
}

const BlogPage = async ({ searchParams }: { searchParams: any }) => {
  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat;
  const tag = searchParams.tag;
  const sort = searchParams.sort || 0;
  const query = (cat ? `&cat=${cat}` : "") + (tag ? `&tag=${tag}` : "");
  const query2 = sort ? `&sort=${sort}` : "";
  const { posts, count } = await FindBlogList(page, cat, tag, sort);

  return (
    <>
      {/* 封面图 */}
      <section className={styles.Cover_container}>
        <div className={styles.mask}>
          <h2 className={styles.banner_text}>
            <FaBookOpen className={styles.icons} />
            文章 {cat && <span>{cat}</span>} {tag && <span>{tag}</span>}{" "}
            <span>共{count}篇</span>
          </h2>
        </div>
      </section>
      {count !== 0 ? (
        <section className={styles.container}>
          <div className={styles.filter_container}>
            <div className={styles.options_title}>排序</div>
            <ul className={styles.option_list}>
              <Link
                href={`/blog?sort=0${query}`}
                className={`${sort == 0 ? styles.activeLink : ""}`}
              >
                更新
              </Link>
              <Link
                href={`/blog?sort=1${query}`}
                className={`${sort == 1 ? styles.activeLink : ""}`}
              >
                浏览
              </Link>
            </ul>
          </div>
          <div className={styles.PostList}>
            {posts.map((item: Article) => (
              <PostListItem item={item} key={item.id} />
            ))}
          </div>
          <Pagination page={page} sum={count} query={query + query2} />
        </section>
      ) : (
        <DataNull />
      )}
    </>
  );
};

export default BlogPage;
