import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

const CommentCard = () => {
  return (
    <Link href={"#"} className={styles.container}>
      <div className={styles.author}>
        <div className={styles.imageContainer}>
          <Image
            src={"http://cdn.risingsource.top/blog/catIcon/cat1.png"}
            alt="http://cdn.risingsource.top/blog/catIcon/cat1.png"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.comment_info}>
          <h6>测试</h6>
          <span className={styles.timer}>2023-12-29 21:39:32</span>
        </div>
      </div>
      <div className={styles.comment_text}>
        <span className={styles.content}>
          变链接的话要注意一下收录问题，毕竟如果已经收录的链接无法访问了，会判定死链，可以做好规则跳转。但是我认为，要想链接短，买个短域名更好🤔。浏览器还是习惯用Chrome，最近看到了夸克的PC内测，但是我手机也不怎么用夸克，还是用Chrome和edge比较多。至于win11，我之前升级过，但是后来有点不习惯，还是用微软官方的工具降回了win10，可能是我笔记本太垃圾了，还是win10感觉流畅点
        </span>
        <span className={`${styles.post} ${styles.timer} line-clamp `}>
          发表在「风记得的第1305天星辰：固定链接、夸克浏览器PC、Windows11、长津湖后再无圣诞节、电影《摇啊摇，摇到外婆桥》」{" "}
        </span>
      </div>
    </Link>
  );
};

export default CommentCard;
