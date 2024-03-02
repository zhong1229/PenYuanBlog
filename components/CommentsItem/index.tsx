"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import CommentsFrom from "../CommentsFrom";
import { useState } from "react";

import { BiPaperPlane } from "react-icons/bi";

interface CommentItemPops {
  parentCommentId?: number;
  postId: number;
  type: string;
  replyname?: string;
  replynameEmail?: string;
  summit: (data: any) => void;
  item: any;
}

const CommentItem = (params: CommentItemPops) => {
  const [show, setShow] = useState<boolean>(false);
  const ComSummit = (data: any) => {
    params.summit(data);
    setShow(false);
  };
  return (
    <li className={styles.comment} id={"comment" + params.item.id}>
      <div className={styles.user_meta}>
        <div className={styles.user_avatar}>
          <Image
            src={"/lv4.png"}
            alt="默认头像"
            width={42}
            height={42}
            className={styles.image}
          />
        </div>
        <Link href={"#"} className={styles.cite}>
          {params.item.username}
        </Link>
      </div>
      <div className={styles.comment_meta}>
        <Link href={"#"}>{params.item.createdAt} </Link>
      </div>
      <div className={styles.comment_content}>
        {params.item.replyname && (
          <Link href={"#comment" + params.item.id} className={styles.fn}>
            @{params.item.replyname}
          </Link>
        )}
        {params.item.content}
        <div className={styles.reply}>
          <a
            className={styles.comment_reply_link}
            onClick={() => setShow(true)}
          >
            <BiPaperPlane />
          </a>
        </div>
      </div>
      {show && (
        <div>
          <h3 className={styles.comment_reply_title}>
            回复给{params.item.username}{" "}
            <a onClick={() => setShow(false)}>取消回复</a>
          </h3>
          <CommentsFrom
            replyname={params.replyname}
            replynameEmail={params.replynameEmail}
            postId={params.postId}
            type={params.type}
            summit={ComSummit}
            parentCommentId={params.item.id}
          />
        </div>
      )}
      {params.item?.childComments && (
        <ul className={styles.children}>
          {params.item?.childComments.map((item: any) => (
            <CommentItem
              postId={params.postId}
              type={params.type}
              summit={params.summit}
              item={{ ...item, id: params.item.id }}
              replyname={item.username}
              replynameEmail={item.email}
              key={item.id}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CommentItem;
