// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./PapersSlideshow.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { PaperCard } from "../../../common/PaperCard/PaperCard";
import { useState } from "react";
import { useEffect } from "react";
import { getpaper } from "../../../../core/services/api/paper";

const PapersSlideshow = () => {
  const [papers, setPapers] = useState([]);
  const [randd,setRandd]=useState(1);

  // console.log(papers.news);

  const getpapers = async (page, row, sort, sortType, query, catId) => {
    try {
      const paper = await getpaper(page, row, sort, sortType, query, catId);
      setPapers(paper.news);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  useEffect(() => {
    getpapers();
  }, [randd]);
  return (
    <>
      <Swiper
        dir="rtl"
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {papers &&
          papers.map((papr, index) => {
            return (
              <SwiperSlide key={index}>
                <PaperCard papr={papr} key={index} setRandd={setRandd} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export { PapersSlideshow };
