import React from "react";

import { ButtonDarkGreen } from "../common/ButtonDarkGreen/ButtonDarkGreen";

import err from "../../assets/image/404.svg";
import PreviousMap from "postcss/lib/previous-map";

const Error404 = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "var(--background)" }}
        className="w-screen h-screen flex flex-col items-center justify-center"
      >
        <div className="flex justify-center items-center w-[70%] md:w-[50%] h-[80%]">
          <img src={err} alt="" />
        </div>
        <div className="flex gap-4">
          <ButtonDarkGreen name={"بازگشت به خانه"} sendMeTo="/" />
          <ButtonDarkGreen name={"بازگشت به صفحه قبل"} sendMeTo={-1} />
        </div>
      </div>
    </>
  );
};

export { Error404 };
