import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

import { MdEmail } from "react-icons/md";
import { FaGithub, FaBilibili } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { fetchGlobalConfig, fetchUserConfig } from "@/lib/globalConfig";

const Footer = async () => {
  const globalConfig = await fetchGlobalConfig();
  const globalUserInfo = await fetchUserConfig();
  return (
    <div className={`wrapper ${styles.container}`}>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Link href={`mailto:${globalConfig.email}`}>
            <MdEmail />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href={globalConfig.github} target="_blank">
            <FaGithub />
          </Link>
        </div>
        <div className={styles.icon_img}>
          <Link href={"/"}>
            <Image
              src={globalUserInfo.icon}
              alt={globalUserInfo.name}
              width={50}
              height={50}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href={globalConfig.blibli} target="_blank">
            <FaBilibili />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href={globalConfig.douyin} target="_blank">
            <FaTiktok />
          </Link>
        </div>
      </div>
      <div className={styles.info_container}>
        <p>© 2020- All Rights Reserved {globalConfig.blogname} 版权所有</p>
        <div className={styles.github_badges}>
          <div className={styles.github_badge}>
            <span className={styles.badge_subject}>Powered</span>
            <Link
              target="_blank"
              href={"https://nextjs.org/"}
              className={`${styles.badge_value} ${styles.bg_red}`}
            >
              Next
            </Link>
          </div>
          <div className={styles.github_badge}>
            <span className={styles.badge_subject}>CDN</span>
            <Link
              target="_blank"
              href={"https://www.qiniu.com/"}
              className={`${styles.badge_value} ${styles.bg_green}`}
            >
              七牛云
            </Link>
          </div>
          <div className={styles.github_badge}>
            <span className={styles.badge_subject}>Warehouse</span>
            <Link
              target="_blank"
              href={"https://github.com"}
              className={`${styles.badge_value} ${styles.bg_blue}`}
            >
              GitHub
            </Link>
          </div>
          <div className={styles.github_badge}>
            <span className={styles.badge_subject}>
              {globalConfig.archival.substring(0, 5) || ""}
            </span>
            <Link
              target="_blank"
              href={"https://beian.miit.gov.cn/#/Integrated/index"}
              className={`${styles.badge_value} ${styles.bg_gray}`}
            >
              {globalConfig.archival.substring(5) || ""}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
