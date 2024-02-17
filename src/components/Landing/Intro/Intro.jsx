import React from "react";

import introImg from "../../../assets/image/intro.svg";
import { ButtonDarkGreen } from "../../common/ButtonDarkGreen/ButtonDarkGreen";
import { HeaderSignIn } from "../../Header/HederSignIn/HeaderSignIn";

const Intro = () => {
  return (
    <>
      <div id="intro" style={{ background: "var(--intro)" }}>
        <HeaderSignIn />
        <div className="container w-[95%] mx-auto flex flex-row gap-4 justify-center">
          <div
            id="rightBox"
            className="flex flex-col justify-center md:justify-start basis-full md:basis-1/2 xl:mt-[80px] px-10 md:px-0 py-[60px]"
          >
            <h1 className="my-[10px] text-center md:text-start">
              آموزشگاه اچ وان
            </h1>
            <p
              style={{ color: "var(--text-col4)" }}
              className="w-[100%] md:w-[80%] mt-[30px] mb-[50px] text-center md:text-justify leading-7"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <div className="flex flex-col md:flex-row">
              <ButtonDarkGreen name="شروع یادگیری" sendMeTo="/courselis1" />
            </div>
          </div>
          <div
            id="leftBox"
            className="hidden basis-1/2 md:flex justify-center items-center "
          >
            <img src={introImg} alt="" className="w-[90%] float-center" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Intro };
