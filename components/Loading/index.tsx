import styles from "./index.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span className={styles.binary}></span>
        <span className={styles.binary}></span>
        <span className={styles.getting_there}>LOADING MY STUFF...</span>
      </div>
    </div>
  );
};

export default Loading;
