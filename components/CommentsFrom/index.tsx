"use client";

import { useState } from "react";
/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";
import useSWR from "swr";
import toast from "react-hot-toast";

const icons = [
  "😀",
  "😁",
  "😂",
  "😃",
  "😄",
  "😅",
  "😆",
  "😇",
  "😈",
  "😉",
  "😊",
  "😋",
  "😌",
  "😍",
  "😎",
  "😏",
  "😐",
  "😑",
  "😒",
  "😓",
  "😔",
  "😕",
  "😖",
  "😗",
  "😘",
  "😙",
  "😚",
  "😛",
  "😜",
  "😝",
  "😞",
  "😟",
  "😠",
  "😡",
  "😢",
  "😣",
  "😤",
  "😥",
  "😦",
  "😧",
  "😨",
  "😩",
  "😪",
  "😫",
  "😬",
  "😭",
  "😮",
  "😯",
  "😰",
  "😱",
  "😲",
  "😳",
  "😴",
  "😵",
  "😶",
  "😷",
  "😸",
  "😹",
  "😺",
  "😻",
  "😼",
  "😽",
  "😾",
  "😿",
  "🙀",
  "🙁",
  "🙂",
  "🙃",
  "🙄",
  "🙅",
  "🙆",
  "🙇",
  "🙈",
  "🙉",
  "🙊",
  "🙋",
  "🙌",
  "🙍",
  "🙎",
  "🙏",
  "🤚",
  "🤛",
  "🤜",
  "🤝",
  "🤞",
  "🤟",
  "🤠",
  "🤡",
  "🤢",
  "🤣",
  "🤤",
  "🤥",
  "🤦",
  "🤧",
  "🤨",
  "🤩",
  "🤪",
  "🤫",
  "🤬",
  "🤭",
  "🤮",
  "🤯",
];

interface Comment {
  username: string;
  email: string;
  website?: string;
  content: string;
  captcha: string;
}

interface CommentsFromPops {
  parentCommentId?: number;
  postId: number;
  type: string;
  replyname?: string;
  replynameEmail?: string;
  summit: (data: any) => void;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const CommentsFrom = (item: CommentsFromPops) => {
  const { data, mutate, isLoading } = useSWR(`/api/captcha`, fetcher);

  const [ShowIcons, setShowIcons] = useState<boolean>(false);

  const [fromState, setFromState] = useState<Comment>({
    username: "",
    email: "",
    website: "",
    content: "",
    captcha: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !fromState.username ||
      !fromState.email ||
      !fromState.website ||
      !fromState.content
    ) {
      toast.error("评论提交数据内容不能为空");
      return false;
    }
    if (fromState.captcha != data?.text) {
      toast.error("验证码错误");
      return false;
    }

    const { summit, ...result } = item;
    const { captcha, ...result2 } = fromState;
    const params = { ...result, ...result2 };
    summit(params);
  };

  return (
    <div className={styles.container}>
      <form className={styles.comment_form}>
        <p className={styles.comment_form_comment}>
          <label>评论 </label>
          <textarea
            id="comment"
            name="comment"
            cols={45}
            rows={8}
            maxLength={65525}
            value={fromState?.content}
            onChange={(e) =>
              setFromState({ ...fromState, content: e.target.value })
            }
          ></textarea>
        </p>
        <p className={styles.comment_form_author}>
          <label htmlFor="username">显示名称</label>
          <input
            type="text"
            name="username"
            size={30}
            maxLength={245}
            required={true}
            value={fromState.username}
            onChange={(e) =>
              setFromState({ ...fromState, username: e.target.value })
            }
          ></input>
        </p>
        <p className={styles.comment_form_email}>
          <label htmlFor="email">电子邮箱地址</label>
          <input
            type="text"
            name="email"
            size={30}
            maxLength={245}
            required={true}
            value={fromState.email}
            onChange={(e) =>
              setFromState({ ...fromState, email: e.target.value })
            }
          ></input>
        </p>
        <p className={styles.comment_form_url}>
          <label htmlFor="website">网站地址</label>
          <input
            name="website"
            type="text"
            size={30}
            maxLength={245}
            required={true}
            value={fromState.website}
            onChange={(e) =>
              setFromState({ ...fromState, website: e.target.value })
            }
          ></input>
        </p>
        <p className={styles.form_captcha}>
          {isLoading ? (
            "Loading"
          ) : (
            <div
              className={styles.loaded}
              dangerouslySetInnerHTML={{ __html: data?.data }}
              onClick={mutate}
            ></div>
          )}

          <label htmlFor="captcha">验证码</label>
          <input
            name="captcha"
            type="text"
            size={30}
            maxLength={200}
            required
            value={fromState.captcha}
            onChange={(e) =>
              setFromState({ ...fromState, captcha: e.target.value })
            }
          ></input>
        </p>
        <p className={styles.form_submit}>
          <input
            type="submit"
            className={styles.submit}
            onClick={handleSubmit}
            value="发表评论"
          />
        </p>
        <div
          className={styles.emoji_btn}
          onClick={() => setShowIcons(!ShowIcons)}
        >
          🤚
        </div>
      </form>
      <div className={`${styles.emoji_icons}  ${ShowIcons ? styles.show : ""}`}>
        {icons.map((item) => (
          <span
            className={styles.emoji_icon}
            key={item}
            onClick={() =>
              setFromState({ ...fromState, content: fromState.content + item })
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CommentsFrom;
