import Image from "next/image";
import styles from "./index.module.css";

const DataNull = () => {
  return (
    <div className={styles.container}>
      <Image src={"/Data_Null.jpg"} alt="数据为空" fill />
    </div>
  );
};

export default DataNull;
