import Link from "next/link";
import styles from "./aboutpage.module.css";
import Image from "next/image";

import type { Metadata } from "next";
import {
  fetchGlobalConfig,
  fetchStatistics,
  fetchUserConfig,
} from "@/lib/globalConfig";
import MdEditor from "@/components/MdEditor";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const { blogname } = await fetchGlobalConfig();
  return {
    title: blogname + " | 关于我",
  };
}

const getTextColor = (value: string) => {
  const colorList = [
    {
      text: "ISTP-A,ISTP-T,ISFP-A,ISFP-T,ESTP-A,ESTP-T,ESFP-A,ESFP-T",
      value: "#E4AE3A",
    },
    {
      text: "ISTJ-A,ISTJ-T,ISFJ-A,ISFJ-T,ESTJ-A,ESTJ-T,ESFJ-A,ESFJ-T",
      value: "#4298B4",
    },
    {
      text: "INFJ-A,INFJ-T,INFP-A,INFP-T,ENFJ-A,ENFJ-T,ENFP-A,ENFP-T",
      value: "#33A474",
    },
    {
      text: "INTJ-A,INTJ-T,INTP-A,INTP-T,ENTJ-A,ENTJ-T,ENTP-A,ENTP-T",
      value: "#88619A",
    },
  ];
  let color;
  colorList.map((item) => {
    const bool = item?.text.split(",").some((f) => f === value);
    if (bool) {
      color = item.value;
    }
  });
  return color;
};

const AboutPage = async () => {
  const {
    name,
    introduction,
    birthDate,
    constellation,
    games2,
    games1,
    hobby,
    occupation,
    character,
    motto,
  } = await fetchUserConfig();
  const { describe } = await fetchGlobalConfig();
  const { post, category, tags, images, websiteTime, oneweek, onImages } =
    await fetchStatistics();
  return (
    <>
      <section className={styles.container}>
        <div className={styles.Introduction}>
          <div className={styles.left}>
            <div className={styles.title}>你好！</div>
            <div className={styles.title}>我是{name}</div>
            <div className={styles.describe}>{introduction}</div>
            <div className={styles.describe_tips}>
              The sunshine after those storms illuminated my past confusion,
              making me a stronger version of myself today
            </div>
            <div className={styles.buttons}>
              <Link href={"#"}>博主信息</Link>
              <Link href={"#"}>本站信息</Link>
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src={"/aboutlogo.jpg"}
              alt=""
              fill
              className={styles.image}
            />
          </div>
        </div>
        <div className={`${styles.card_container} ${styles.Introduction_bar}`}>
          <div className={styles.bar_box}>
            <span className={styles.tips}>生于</span>
            <div className={styles.title} style={{ color: "#43a6c6" }}>
              {birthDate}
            </div>
          </div>
          <div className={styles.bar_box}>
            <span className={styles.tips}>星座</span>
            <div className={styles.title} style={{ color: "#c69043" }}>
              {constellation}
            </div>
          </div>
          <div className={styles.bar_box}>
            <span className={styles.tips}>爱好</span>
            <div className={styles.title} style={{ color: "#d44040" }}>
              {hobby}
            </div>
          </div>
          <div className={styles.bar_box}>
            <span className={styles.tips}>职业</span>
            <div className={styles.title} style={{ color: "#b04fe6" }}>
              {occupation}
            </div>
          </div>
        </div>
        <div className={styles.Philosophical}>
          <div
            className={`${styles.card_container} ${styles.Philosophical_left}`}
          >
            <span className={styles.tips}>性格</span>
            <div className={styles.title}>
              {character && character.split(",")[0]}
            </div>
            <div
              className={styles.title}
              style={{
                color: getTextColor(character && character.split(",")[1]),
              }}
            >
              {character && character.split(",")[1]}
            </div>
            <div className={styles.image_container}>
              <Image
                src={`https://www.16personalities.com/static/images/personality-types/avatars/email/large/${
                  character && character.split(",")[1].split("-")[0]
                }_male.png?v=1`}
                alt={character && character.split(",")[1]}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.tips_bottom}>
              在{" "}
              <Link href={"https://www.16personalities.com/"} target="_blank">
                16Personalities
              </Link>{" "}
              了解关于
              <Link
                target="_blank"
                href={`https://www.16personalities.com/ch/${
                  character && character.split(",")[1].split("-")[0]
                }-人格`}
              >
                {character && character.split(",")[0]}
              </Link>
               的更多信息
            </div>
          </div>
          <div
            className={`${styles.card_container} ${styles.Philosophical_right}`}
          >
            <span className={styles.tips}>座右铭</span>
            <div
              className={styles.title}
              style={{ opacity: ".6", marginBottom: "8px" }}
            >
              {motto && motto.split(",")[0]}
            </div>
            <div className={styles.title}> {motto && motto.split(",")[1]}</div>
            <div className={styles.tips_bottom}>
              Now is everything, warm and free
            </div>
          </div>
        </div>
        <div className={styles.games}>
          <div className={`${styles.card_container} ${styles.games_left}`}>
            <Image src={"/game1.jpg"} alt="" fill className={styles.image} />
            <div className={styles.games_info_container}>
              <span className={styles.tips}>爱好游戏</span>
              <div className={styles.title}>原神</div>
              <div className={styles.content_bottom}>
                <div className={styles.icon_group}>
                  <div className={styles.loading_bar}></div>
                </div>
                <div className={styles.uid}>UID: {games1}</div>
              </div>
            </div>
          </div>
          <div className={`${styles.card_container} ${styles.games_right}`}>
            <Image src={"/game2.png"} alt="" fill className={styles.image} />
            <div className={styles.games_info_container}>
              <span className={styles.tips}>爱好游戏</span>
              <div className={styles.title}>崩坏星穹铁道</div>
              <div className={styles.content_bottom}>
                <div className={styles.icon_group}>
                  <div className={styles.loading_bar}></div>
                </div>
                <div className={styles.uid}>UID: {games2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.config_container}>
          <div className={`${styles.card_container} ${styles.config_left}`}>
            <span className={styles.tips}>浏览</span>
            <div className={styles.title}>网站统计</div>
            <div className={styles.statistic}>
              <div className={styles.statistic_item}>
                <span className={styles.tips}>文章数</span>
                <span className={styles.number}>{post}</span>
              </div>
              <div className={styles.statistic_item}>
                <span className={styles.tips}>分类数</span>
                <span className={styles.number}>{category}</span>
              </div>
              <div className={styles.statistic_item}>
                <span className={styles.tips}>标签数</span>
                <span className={styles.number}>{tags}</span>
              </div>
              <div className={styles.statistic_item}>
                <span className={styles.tips}>图片数量</span>
                <span className={styles.number}>{images}</span>
              </div>
              <div className={styles.statistic_item}>
                <span className={styles.tips}>建站天数</span>
                <span className={styles.number}>{websiteTime}</span>
              </div>
            </div>
            <div className={styles.tips_bottom}>
              最新文章: {oneweek | 0} 最新图片: {onImages | 0}
            </div>
          </div>
          <div className={styles.config_right}>
            <Image src={"/_image.png"} alt="" fill />
          </div>
        </div>
        <div className={`${styles.card_container} ${styles.content}`}>
          <span className={styles.tips}>心路历程</span>
          <div className={styles.title}>关于本站</div>
          <div className={styles.dec_content}>
            <MdEditor content={describe} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
