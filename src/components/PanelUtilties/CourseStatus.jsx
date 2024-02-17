import React from "react";
import { Progress } from "antd";

const CourseStatus = () => {
  return (
    <div className="w-[100%] h-[70%] rounded-md overflow-hidden shadow-cardShadow">
      <div style={{background:'var(--main-col2)'}} className="w-[100%] h-[15%] flex justify-center items-center">
        <h2 style={{color:'var(--darkblue)'}}>وضعیت دوره ها</h2>
      </div>
      <div style={{background:'var(--back-col)'}} className="w-[100%] h-[85%] flex flex-col justify-center items-center">
        <div style={{color:'var(--text-col4)'}} className="w-[90%] h-[80%]">
          <label>
            دوره های رزرو شده
            <Progress percent={53} strokeWidth={10} strokeColor={"var(--text-col4)"} />
          </label>
          <label>
            دوره های من
            <Progress percent={42} strokeWidth={10} strokeColor={"var(--text-col4)"} />
          </label>
          <label>
            دوره های مورد علاقه
            <Progress percent={12} strokeWidth={10} strokeColor={"var(--text-col4)"} />
          </label>
          <label>
            دوره های پایان یافته
            <Progress percent={38} strokeWidth={10} strokeColor={"var(--text-col4)"} />
          </label>
        </div>
      </div>
    </div>
  );
};

export { CourseStatus };
