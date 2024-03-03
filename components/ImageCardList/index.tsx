import { findImageList } from "@/lib/ImageFetch";
import ImageCard, { Image } from "../ImageCard";
import styles from "./index.module.css";
import DataNull from "../DataNull";
import { fetchImage } from "@/lib/HomeFetch";

const ImageCardList = async ({ type }: { type: "0" | "1" }) => {
  const List: any[] = type === "1" ? await findImageList() : await fetchImage();

  if (List.length === 0) {
    return <DataNull />;
  }

  return (
    <div className={styles.container}>
      {List.map((item: Image) => (
        <ImageCard key={item.id + "image"} item={item} />
      ))}
    </div>
  );
};

export default ImageCardList;
