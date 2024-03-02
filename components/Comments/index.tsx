"use client";

import { Key, useState } from "react";
import useSWR from "swr";

import CommentItem from "../CommentsItem";
import { IoClose } from "react-icons/io5";
import styles from "./index.module.css";
import CommentsFrom from "../CommentsFrom";

import toast from "react-hot-toast";

import { BiMessageDots, BiSolidGrid } from "react-icons/bi";
import Loading from "@/app/loading";
import DataNull from "../DataNull";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Comments = ({ postId, type }: { postId: number; type: string }) => {
  const [show, setShow] = useState<boolean>(false);

  const { data, mutate, isLoading } = useSWR(
    `/api/comment?postSlug=${postId}`,
    fetcher
  );

  const handleSubmit = async (data: any) => {
    const res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        ...data,
      }),
    });
    if (!res.ok) {
      toast.error("评论失败");
      throw new Error("评论失败");
    }
    const { message } = await res.json();
    toast.success(message);
    setShow(false);
    mutate();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title_top}>
        <h6 className={styles.title}>
          <BiMessageDots />{" "}
          {data?.count === 0 ? "暂时还未有评论" : data?.count + "条评论"}
        </h6>
        <a className={styles.add_btn} onClick={() => setShow(true)}>
          <BiSolidGrid /> {data?.count === 0 ? "我来说一句" : "发表评论"}
        </a>
      </div>
      <ol className={styles.comment_list}>
        {isLoading ? (
          <Loading />
        ) : data.comments.length !== 0 ? (
          data?.comments?.map((item: any) => (
            <CommentItem
              replyname={item.username}
              replynameEmail={item.email}
              postId={postId}
              type={type}
              summit={handleSubmit}
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <DataNull />
        )}
      </ol>
      {show && (
        <div className={styles.dialog}>
          <div className={`wrapper ${styles.dia_container}`}>
            <IoClose
              className={styles.close_icon}
              onClick={() => setShow(false)}
            />
            <h3 className={styles.comment_reply_title}>
              <BiSolidGrid style={{ marginRight: "5px" }} /> 发表评论
            </h3>
            <CommentsFrom postId={postId} type={type} summit={handleSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
