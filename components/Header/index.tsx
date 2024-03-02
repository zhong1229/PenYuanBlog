"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";

import {
  FaHome,
  FaBookOpen,
  FaCube,
  FaTags,
  FaImages,
  FaUserAlt,
  FaList,
} from "react-icons/fa";

import { IoCloseSharp } from "react-icons/io5";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeaderProps {
  blogname: string;
  blogsubstring: string;
  bloglogo: string;
}

interface Link {
  path: string;
  icon: any;
  title: string;
}

const LikList: Link[] = [
  {
    path: "/",
    icon: <FaHome />,
    title: "主页",
  },
  {
    path: "/blog",
    icon: <FaBookOpen />,
    title: "博客",
  },
  {
    path: "/category",
    icon: <FaCube />,
    title: "分类",
  },
  {
    path: "/tags",
    icon: <FaTags />,
    title: "标签",
  },
  {
    path: "/images",
    icon: <FaImages />,
    title: "相册",
  },
  {
    path: "/about",
    icon: <FaUserAlt />,
    title: "关于",
  },
];

const Header = (props: HeaderProps) => {
  const [scrollNumber, setScrollNumber] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const windowDom = window;
    if (typeof windowDom !== undefined) {
      windowDom.addEventListener("scroll", () => {
        setScrollNumber(windowDom.scrollY);
      });
    }
    return () => {
      if (typeof windowDom !== undefined) {
        windowDom.removeEventListener("scroll", () =>
          setScrollNumber(windowDom.scrollY)
        );
      }
    };
  }, []);

  const open = () => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
      setShow(true);
    }
  };

  const close = () => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
      setShow(false);
    }
  };

  const LinkPath = (path: string) => {
    setShow(false);
    router.push(path);
  };

  return (
    <>
      <header
        className={
          scrollNumber > 0 ? `${styles.header} ${styles.sticky}` : styles.header
        }
      >
        <div className={styles.nav_bar}>
          <div className={styles.left}>
            <div className={styles.logo_Image}>
              <Image src={props.bloglogo} alt="" fill />
            </div>
            <div className={styles.logs_Info}>
              <Link href="/" className={styles.logo}>
                {props.blogname}
              </Link>
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.nav_items}>
              {LikList.map((item) => (
                <Link href={item.path} key={item.path + "max"}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.menu}>
            <span onClick={open}>
              <FaList />
            </span>
          </div>
        </div>
      </header>
      <div className={`${styles.menu_list}  ${show ? styles.open : ""} `}>
        <div className={styles.close_btn}>
          <button className={styles.btn} onClick={close}>
            <IoCloseSharp />
          </button>
        </div>
        <div className={styles.nav_items}>
          {LikList.map((item) => (
            <span
              className={styles.link}
              key={item.path + "min"}
              onClick={() => LinkPath(item.path)}
            >
              {item.icon}
              <span>{item.title}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
