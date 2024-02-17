import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import joks from '../../../assets/image/development.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SliderCart.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import car1 from "../../../assets/image/demo/01.jpg";
import car2 from "../../../assets/image/demo/03.jpg";
import car3 from "../../../assets/image/demo/05.jpg";
import car4 from "../../../assets/image/demo/06.jpg";
import car5 from "../../../assets/image/demo/07.jpg";
import car6 from "../../../assets/image/demo/08.jpg";
import car7 from "../../../assets/image/demo/09.jpg";
import car8 from "../../../assets/image/demo/10.jpg";


 const SliderCart = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export {SliderCart}
