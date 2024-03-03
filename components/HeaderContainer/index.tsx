import { fetchGlobalConfig } from "@/lib/globalConfig";
import Header from "../Header";

const HeaderContainer = async () => {
  const { blogname, describe, bloglogo } = await fetchGlobalConfig();

  return (
    <Header blogname={blogname} blogsubstring={describe} bloglogo={bloglogo} />
  );
};

export default HeaderContainer;
