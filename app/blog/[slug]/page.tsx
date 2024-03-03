import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

import { BsFillTagsFill } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { LuTimer, LuFlame } from "react-icons/lu";
import { MdOutlineArticle } from "react-icons/md";
import { Article } from "@/components/PostItem";
import MdEditorContent from "@/components/MdEditor";
import Comments from "@/components/Comments";

import type { Metadata } from "next";
import { FindPostContent, nextArticle, previous } from "@/lib/BlogFetch";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { slug } = params;
  const Data: Article = await FindPostContent(slug);
  return {
    title: Data.title,
    description: Data.synopsis,
  };
}

const BlogContentPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const Data: Article = await FindPostContent(slug);
  const next = await nextArticle(+slug);
  const prev = await previous(+slug);
  return (
    <>
      <section className={styles.web_imageContainer}>
        <div className={styles.imageContainer}>
          <Image src={Data.cover} alt="" fill className={styles.image} />
        </div>
        <div className={styles.title}>
          <h1>{Data.title}</h1>
          <div className={styles.mark}>
            <div className={styles.tag}>
              <BsFillTagsFill />
              <Link href={"#"} style={{ marginLeft: "3px" }}>
                {Data?.cat?.name}
              </Link>
            </div>
            <div className={styles.tag_list}>
              {Data.tags.split(",").map((item) => (
                <Link href={"#"} key={item}>
                  <FiAward style={{ marginRight: "3px" }} />
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.meta}>
          <div className={styles.menu_item}>
            <span>发布时间</span>
            <span className={styles.content}>
              <LuTimer style={{ marginRight: "3px" }} />
              {Data.creationtime.substring(0, 10)}
            </span>
          </div>
          <div className={styles.menu_item}>
            <span>热度</span>
            <span className={styles.content}>
              <LuFlame style={{ marginRight: "3px" }} />
              {Data.pageview}
            </span>
          </div>
          <div className={styles.menu_item}>
            <span>字数</span>
            <span className={styles.content}>
              <MdOutlineArticle style={{ marginRight: "3px" }} />
              {Data.count}
            </span>
          </div>
          <div className={`${styles.menu_item} ${styles.contents}`}>
            <span className={styles.desc}>{Data.synopsis}</span>
          </div>
        </div>
      </section>
      <section className={styles.contentContainer}>
        <MdEditorContent content={Data.content} />
      </section>
      <section className={styles.optionsContainer}>
        <div className={styles.top}>
          {!prev.message && (
            <div className={styles.left}>
              <Image
                src={prev.cover}
                alt={prev.title}
                sizes="100"
                fill
                className={styles.image}
              />
              <Link href={`/blog/${prev.id}`} className={styles.left_info}>
                <p>上一篇</p>
                <p>{prev.title}</p>
              </Link>
            </div>
          )}

          {!next.message && (
            <div className={styles.right}>
              <Image
                src={next.cover}
                alt={next.title}
                fill
                sizes="100"
                className={styles.image}
              />
              <Link href={`/blog/${next.id}`} className={styles.right_info}>
                <p className={styles.number}>下一篇</p>
                <p className={styles.title}>{next.title}</p>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.bottom}>
          <Comments postId={+slug} type="0" />
        </div>
      </section>
    </>
  );
};

export default BlogContentPage;
