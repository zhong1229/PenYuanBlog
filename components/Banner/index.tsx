import { fetchCarousel } from "@/lib/HomeFetch";
import Swiper from "../Swiper";

const Banner = async () => {
  const cData = await fetchCarousel();
  return (
    <>
      <Swiper List={cData} />
    </>
  );
};

export default Banner;
