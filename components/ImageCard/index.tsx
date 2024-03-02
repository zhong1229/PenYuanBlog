import Image from "next/image";
import styles from "./index.module.css";

export type Image = {
  id: number;
  src: string;
  synopsis: string;
  creationtime: string;
  updatetime: string;
  websiteSettingId: number | null;
};

const ImageCard = ({ item }: { item: Image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <Image
          src={item.src}
          alt={item.synopsis}
          sizes="100"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={500}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.timer}>
            {item.creationtime.substring(0, 10)}
          </span>
          <p className={styles.title}>{item.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
