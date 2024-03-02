import HomeCard, { BlogItem } from "../HomeCard";
import styles from "./index.module.css";

const HomeCardList = async ({ List }: { List: BlogItem[] }) => {
  return (
    <div className={styles.CardContainer}>
      {List?.map((item) => (
        <HomeCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HomeCardList;
