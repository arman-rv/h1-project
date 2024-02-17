import g1 from "../../../../assets/image/grouping/demo/1.svg";
import g2 from "../../../../assets/image/grouping/demo/2.svg";
import g3 from "../../../../assets/image/grouping/demo/3.svg";
import g4 from "../../../../assets/image/grouping/demo/4.svg";
import g5 from "../../../../assets/image/grouping/demo/5.svg";
import g6 from "../../../../assets/image/grouping/demo/6.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { GroupingCard } from "../../../common/GroupingCard/GroupingCard";

const GroupingSlider = () => {
  return (
    <>
      <div className="container mx-auto my-[40px] flex flex-col items-center">
        <h3 name="grouping" className="text-[32px]">
          دسته بندی
        </h3>
        <p style={{ color: "var(--text-col4)" }}>
          ما فرصت آماده شدن برای زندگی را فراهم می کنیم
        </p>
        <Swiper
          dir="rtl"
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper !w-[80%] sm:!w-[100%]"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            430: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className="!h-auto mt-14">
            <GroupingCard title="دیجیتال مارکتینگ" pic={g1} desc="25 جلسه" />
          </SwiperSlide>
          <SwiperSlide className="!h-auto mt-14">
            <GroupingCard title="دیجیتال مارکتینگ" pic={g2} desc="25 جلسه" />
          </SwiperSlide>
          <SwiperSlide className="!h-auto mt-14">
            <GroupingCard title="دیجیتال مارکتینگ" pic={g3} desc="25 جلسه" />
          </SwiperSlide>
          <SwiperSlide className="!h-auto mt-14">
            <GroupingCard title="دیجیتال مارکتینگ" pic={g4} desc="25 جلسه" />
          </SwiperSlide>
          <SwiperSlide className="!h-auto mt-14">
            <GroupingCard title="دیجیتال مارکتینگ" pic={g5} desc="25 جلسه" />
          </SwiperSlide>
          <SwiperSlide className="!h-auto mt-14">
            <GroupingCard title="دیجیتال مارکتینگ" pic={g6} desc="25 جلسه" />
          </SwiperSlide>
          <SwiperSlide className="!h-auto mt-14">
            <GroupingCard title="دیجیتال مارکتینگ" pic={g6} desc="25 جلسه" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export { GroupingSlider };
