import styles from "./index.module.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMenu = () => {
  return (
    <div className={styles.media_icons}>
      <a href="#">
        <FaGithub />
      </a>
      <a href="#">
        <i className="iconfont icon-QQ"></i>
      </a>
      <a href="#">
        <MdEmail />
      </a>
    </div>
  );
};

export default SocialMenu;
