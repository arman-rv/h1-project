import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SlideShow.css";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import { CoursesCard } from "../../../common/CoursesCard/CoursesCard/CoursesCard";
import { topCourse } from "../../../../core/services/api/course";

const SlideShow = () => {
  const [top, setTop] = useState([]);

  //console.log("tt", top);

  useEffect(() => {
    const topCourses = async () => {
      try {
        const catgg = await topCourse();
        setTop(catgg);
      } catch (error) {
        throw new Error("ERROR: ", error);
      }
    };
    topCourses();
  }, []);

  return (
    <>
      <Swiper
        dir="rtl"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper !z-50"
      >
        {top && top.map((item, index) => {
          return(
            <SwiperSlide key={index}>
            <CoursesCard
              key={index}
              title={item.title}
              desc={item.describe}
              cost={item.cost}
              statusName={item.statusName}
              levelName={item.levelName}
              likeCount={item.likeCount}
              teacherName={item.teacherName}
              courseRate={item.courseRate}
              pic={item.tumbImageAddress}
              id={item.courseId}
              userIsLiked={item.userIsLiked}
              userLikedId={item.userLikedId}
              userFavorite={item.userFavorite}
              userFavoriteId={item.userFavoriteId}
            />
          </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
};

export { SlideShow };
