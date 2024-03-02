import styles from "./index.module.css";
const StatisticsItem = () => {
  return (
    <div className={styles.item}>
      <h6>本月访问</h6>
      <span className={styles.num} title="本月访问数量">
        0
      </span>
    </div>
  );
};

export default StatisticsItem;
