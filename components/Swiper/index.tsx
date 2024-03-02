"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import SwiperItem, { SwiperItemPops } from "../SwiperItem";

const Banner = ({ List }: { List: SwiperItemPops[] }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
        modifierClass: "pagination_config-",
        bulletActiveClass: "pagination_active",
        bulletClass: "pagination-bullet",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {List.map((item: SwiperItemPops) => (
        <SwiperSlide key={item.id}>
          <SwiperItem pops={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
