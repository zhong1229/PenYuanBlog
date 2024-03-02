import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export interface SwiperItemPops {
  id: number;
  url: string;
  describe: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

const SwiperItem = ({ pops }: { pops: SwiperItemPops }) => {
  return (
    <div className={`${styles.ItemContainer}`}>
      <Link
        href={pops.link ? pops.link : "/"}
        className={styles.image_container}
      >
        <Image
          src={pops.url}
          alt={pops.describe}
          fill
          className={styles.Image}
        />
      </Link>
    </div>
  );
};

export default SwiperItem;
