"use client";

import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [data] = useState([
    { img: "main" },
    { img: "login" },
    { img: "myPage" },
    { img: "category" },
    { img: "fruits" },
    { img: "barofarming" },
    { img: "basket" },
  ]);

  const swipeData = data.map((item, index) => (
    <SwiperSlide key={index}>
      <img
        src={`/ProjectImg/0/${item.img}.png`}
        alt={item.img}
        className="h-[300px] object-cover mx-auto"
      />
    </SwiperSlide>
  ));

  return (
    <section
      style={{ height: `300px` }}
      className="flex relative w-full my-[5px]"
    >
      <Swiper
        style={{ height: "300px" }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination, A11y, Autoplay]}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {swipeData}
      </Swiper>
    </section>
  );
}
