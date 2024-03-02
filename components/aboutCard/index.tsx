import Image from "next/image";
import styles from "./index.module.css";

const aboutCard = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.info_container}`}>
        <h1>基本信息</h1>
        <p>称呼：自由吖</p>
        <p>性别：男</p>
        <p>年龄：00后</p>
        <div className={styles.image_list}>
          <div className={styles.image_item}>
            <Image
              src={"http://cdn.risingsource.top/blog/catIcon/cat5.png"}
              alt=""
              width={115}
              height={115}
              className={styles.image}
            />
            QQ
          </div>
          <div className={styles.image_item}>
            <Image
              src={"http://cdn.risingsource.top/blog/catIcon/cat5.png"}
              alt=""
              width={115}
              height={115}
              className={styles.image}
            />
            微信
          </div>
        </div>
        <p>
          邮箱：<a href="#">3052288628@qq.com</a>
        </p>
        <p>
          Github：<a href="#">https://github.com/clearligh</a>
        </p>
      </div>
      <div className={`${styles.card} ${styles.info_container}`}>
        <h1>基本信息</h1>
        <p>称呼：自由吖</p>
        <p>性别：男</p>
        <p>年龄：00后</p>
        <div className={styles.image_list}>
          <div className={styles.image_item}>
            <Image
              src={"http://cdn.risingsource.top/blog/catIcon/cat5.png"}
              alt=""
              width={115}
              height={115}
              className={styles.image}
            />
            QQ
          </div>
          <div className={styles.image_item}>
            <Image
              src={"http://cdn.risingsource.top/blog/catIcon/cat5.png"}
              alt=""
              width={115}
              height={115}
              className={styles.image}
            />
            微信
          </div>
        </div>
        <p>
          邮箱：<a href="#">3052288628@qq.com</a>
        </p>
        <p>
          Github：<a href="#">https://github.com/clearligh</a>
        </p>
      </div>
      <h1>关于小站</h1>
      <p>
        欢迎来到我的技术博客，这里是云服务器爱好者和技术学习者的知识天地。我专注于分享云服务器相关的实用教程、记录我的个人学习和生活点滴，旨在与同行者交流经验，共同进步。
      </p>
      <p>构建程序：Halo</p>
      <p>静态加速：阿里云 CDN</p>
      <p>云服务器：腾讯云 轻量应用服务器</p>
      <p>诞生日期：2023 年 07 月 13 日</p>
    </div>
  );
};

export default aboutCard;
