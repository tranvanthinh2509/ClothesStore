
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface IProps {
  data: { name: string; link: string; id: number }[];
}

const data = [
    {
        name: 'banner',
        link: 'https://img.freepik.com/free-vector/fashion-sale-with-discount-template_23-2148936503.jpg',
        id: 1
    },
    {
        name: 'banner',
        link: 'https://img.freepik.com/free-vector/fashion-sale-with-discount-template_23-2148936503.jpg',
        id: 2
    },
    {
        name: 'banner',
        link: 'https://img.freepik.com/free-vector/fashion-sale-with-discount-template_23-2148936503.jpg',
        id: 3
    },
]

const Slide = () => {

  return (
    <section className="my-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center">
              <img
                className="w-[1260px] h-[600px] object-cover text-center"
                src={item.link}
                alt="slide"
              ></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slide;
