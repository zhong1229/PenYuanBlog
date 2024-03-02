import ImageCard, { Image } from "../ImageCard";
import styles from "./index.module.css";

const ImageCardList = async ({ List }: { List: any[] }) => {
  return (
    <div className={styles.container}>
      {List.map((item: Image) => (
        <ImageCard key={item.id + "image"} item={item} />
      ))}
    </div>
  );
};

export default ImageCardList;
