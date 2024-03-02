"use client";

import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import styles from "./index.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Pagination = ({
  sum,
  page,
  query,
}: {
  sum: number;
  page: number;
  query: string;
}) => {
  const [List, setList] = useState<number[]>([]);

  useEffect(() => {
    const pageListLength = Math.ceil(sum / 10);
    const pageList: number[] = [];
    for (let index = 1; index <= pageListLength; index++) {
      pageList.push(index);
    }
    for (var i = 0; i < pageList.length; i += 5) {
      const pageSub_list = pageList.slice(i, i + 5);
      for (let index = 0; index < pageSub_list.length; index++) {
        if (
          (page > pageListLength ? pageListLength : page) == pageSub_list[index]
        ) {
          setList(pageSub_list);
          return;
        }
      }
    }
  }, [page, sum]);

  return (
    <div className={styles.container}>
      <Link
        className={page < 1 || page == 1 ? `${styles.d}` : ""}
        href={`/blog?page=${page - 1}&${query}`}
      >
        <FaAnglesLeft />
      </Link>
      {List.map((item) => (
        <Link
          href={`/blog?page=${item}${query}`}
          key={item}
          className={item == page ? `${styles.active}` : ""}
        >
          {item}
        </Link>
      ))}
      <Link
        className={
          page > Math.ceil(sum / 10) || page == Math.ceil(sum / 10)
            ? `${styles.d}`
            : ""
        }
        href={`/blog?page=${page + 1}${query}`}
      >
        <FaAnglesRight />
      </Link>
    </div>
  );
};

export default Pagination;
