import Link from "next/link";
import styles from "./index.module.css";
import { FindTagsList } from "@/lib/BlogFetch";

const ColorList = [
  "#0099e5",
  "#A8DADC",
  "#34bf49",
  "#00a98f",
  "#0dd3ff",
  "#ffed00",
  "#C70039",
  "#F9A726",
  "#C70039",
  "#FFCA58",
];

const TgaList = async ({ List }: { List: string[] }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.boiled}>
        {List.map((item: string) => (
          <Link
            href={"/blog?tag=" + item}
            className={styles.boiled_item}
            key={item}
          >
            <span
              className={styles.card_container}
              style={{
                background: `${ColorList[Math.floor(Math.random() * 10)]}`,
              }}
            >
              {item}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TgaList;
