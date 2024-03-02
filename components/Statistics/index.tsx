import StatisticsItem from "../StatisticsItem";
import styles from "./index.module.css";
const List = [0, 0, 0, 0];
const Statistics = () => {
  return (
    <div className={styles.container}>
      {/* <ul className={`${styles.top} ${styles.num}`}>
        {List.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <span>°</span>
      </ul> */}
      <ul className={styles.bottom}>
        {List.map((item) => (
          <StatisticsItem key={item} />
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
