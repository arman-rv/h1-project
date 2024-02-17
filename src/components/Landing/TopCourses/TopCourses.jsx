import React from "react";

import { CoursesCard } from "../../common/CoursesCard/CoursesCard";
import { ButtonDarkGreen } from "../../common/ButtonDarkGreen/ButtonDarkGreen";
import { SlideShow } from "./SlideShow/SlideShow";

const TopCourses = () => {
  return (
    <div className="container mx-auto my-[80px] flex flex-col items-center">
      <h3 className="text-[32px]">برترین دوره های ما</h3>
      <p style={{color:'var(--text-col4)'}}>ساختن دنیایی بهتر، یک دوره در یک زمان </p>
      <div className="w-[90%] my-[30px] flex justify-center">
      <SlideShow/>
      </div>
      <ButtonDarkGreen name="مشاهده دوره های بیشتر" sendMeTo="/courselis1"/>
    </div>
  );
};

export { TopCourses };
