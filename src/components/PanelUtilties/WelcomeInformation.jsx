import React from "react";
import { SliderCart } from "./SliderCart/SliderCart";
import joks from "../../assets/image/introImg.svg";

const WelcomeInformation = (st) => {
  //console.log(st);
  return (
    <div className="w-full h-full flex-col flex md:flex-row items-center gap-4">
      <div
        style={{ backgroundColor: "var(--back-col)" }}
        className="w-[100%] md:w-[70%] px-3 h-[120px] rounded-md flex justify-center items-center gap-3 shadow-cardShadow"
      >
        <div className="w-[40%] h-[80%] flex justify-center items-center">
          <img className="w-[100%] h-[100%]" src={joks} alt="" />
        </div>
        <div className="w-[60%] h-[120px] flex flex-col justify-center items-center text-justify">
          <h2 className="w-[100%] text-start text-lg md:text-xl">سلام {st.student.fName}، خوش آمدید!</h2>
          <p style={{color:"var(--text-col4)"}} className="text-xs sm:text-sm">دوره شما نود جی اس توسط 11 کاربر جدید در این هفته تکمیل شد</p>
        </div>
      </div>
      <div className="w-[100%] md:w-[30%] h-[120px] py-3 bg-white flex  justify-center items-center shadow-cardShadow rounded-md">
        <SliderCart />
      </div>
    </div>
  );
};

export { WelcomeInformation };
