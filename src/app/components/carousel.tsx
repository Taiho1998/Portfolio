"use client";

import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface data {
  img: string;
  url: string;
}

export default function Carousel() {
  // const data: data[] = [
  //   { img: "main", url: "000" },
  //   { img: "login", url: "111" },
  //   { img: "myPage", url: "222" },
  //   { img: "category", url: "333" },
  //   { img: "fruits", url: "444" },
  //   { img: "barofarming", url: "555" },
  //   { img: "basket", url: "666" },
  // ];

  // const swipeData = data.map((item, index) => (
  //   <SwiperSlide key={index}>
  //     <img
  //       src={`/ProjectImg/Barofarm/${item.url}.png`}
  //       alt={item.img}
  //       className="h-[300px] object-cover mx-auto"
  //     />
  //   </SwiperSlide>
  // ));

  // return (
  //   <section
  //     style={{ height: `300px` }}
  //     className="flex relative w-full my-[5px]"
  //   >
  //     <Swiper
  //       style={{ height: "300px" }}
  //       spaceBetween={50}
  //       slidesPerView={1}
  //       modules={[Pagination, A11y, Autoplay]}
  //       pagination={{
  //         clickable: true,
  //         bulletActiveClass: "swiper-pagination-bullet-active",
  //       }}
  //       autoplay={{ delay: 3000, disableOnInteraction: false }}
  //       loop={true}
  //     >
  //       {swipeData}
  //     </Swiper>
  //   </section>
  // );

  return <div>Carousel Test</div>;
}
