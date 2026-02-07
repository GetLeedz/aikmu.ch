import Image from "next/image";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mt-[35px] lg:mt-[55px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        onInit={(sw) => {
          const swiper = sw;

          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {[
          ["slider1", 1],
          ["slider2", 2],
          ["slider3", 3],
          ["slider4", 4],
          ["slider5", 5],
          ["slider1", 6],
          ["slider2", 7],
          ["slider3", 8],
          ["slider4", 9],
          ["slider5", 10],
        ].map(([imgName, id]) => (
          <SwiperSlide key={id}>
            <Image
              className="transition duration-300 hover:skew-x-2 hover:scale-105"
              src={`/images/slider/${imgName}.png`}
              height={378}
              width={342}
              alt={imgName}
            />
          </SwiperSlide>
        ))}
        <div className="flex items-center justify-center gap-5 mt-[35px] lg:mt-[50px]">
          <button
            className="btn__primary btn-gradient"
            type="button"
            ref={prevRef}
          >
            <FaArrowLeft />
          </button>
          <button
            className="btn__primary btn-gradient"
            type="button"
            ref={nextRef}
          >
            <FaArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
