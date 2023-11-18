import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        initialSlide={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-7"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="absolute z-10 bottom-10 left-20 text-2xl  text-white font-semibold text-center uppercase ">
            salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="absolute z-10 bottom-10 left-20 text-2xl  text-white font-semibold text-center uppercase">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="absolute z-10 bottom-10 left-20 text-2xl  text-white font-semibold text-center uppercase">
            soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="absolute z-10 bottom-10 left-20 text-2xl  text-white font-semibold text-center uppercase">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="absolute z-10 bottom-10 left-20 text-2xl text-white font-semibold text-center uppercase">
            salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
