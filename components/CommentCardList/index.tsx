import CommentCard from "../CommentCard";
import styles from "./index.module.css";

const List = [1];

const CommentCardList = () => {
  return (
    <div className={styles.container}>
      {List.map((item) => (
        <CommentCard key={item + Math.random()} />
      ))}
    </div>
  );
};

export default CommentCardList;
