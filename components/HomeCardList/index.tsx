import { fetchBlog } from "@/lib/HomeFetch";
import HomeCard, { BlogItem } from "../HomeCard";
import styles from "./index.module.css";
import DataNull from "../DataNull";

const HomeCardList = async () => {
  const List: BlogItem[] = await fetchBlog();

  if (List.length === 0) {
    return <DataNull />;
  }

  return (
    <div className={styles.CardContainer}>
      {List?.map((item) => (
        <HomeCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HomeCardList;
