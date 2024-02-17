
import React from "react";
import an from "../../../assets/image/icons8-angular.svg";
import pro from "../../../assets/image/images.jpg";
import { ButtonLightGreen } from "../ButtonLightGreen/ButtonLightGreen";

const CoursesCard = ({ title, desc,cost, typeName, levelName, likeCount, teacherName }) => {

  return (
    <div
      style={{ background: "var(--back-col)" }}
      className="w-[310px] rounded-[20px] mt-[100px] mx-auto flex-col px-[22px] relative pt-[100px] bg-backCol shadow-cardShadow"
    >
      <div className=" h-[155px] w-[155px] rounded-full absolute right-[82.5px] top-[-75px] ">
        <img src={an} className="w-full h-full" />
      </div>
      <div className="flex justify-between">
        {/* badge */}
        <span className="py-1 px-2.5 border-none rounded bg-green-100 text-sm text-green-800 font-medium">
          {typeName}
        </span>
        {/* badge */}

        {/* like */}
        <span className="cursor-pointer tooltip tooltip-top" data-tip="سبد خرید">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
        {/* like */}
      </div>
      <h2 className="mt-4"> {title} </h2>
      <div className="flex flex-row mt-3">
        <div className="flex flex-grow ">
          <div
            style={{ borderColor: "var(--text-col)" }}
            className="border-[1px] h-[30px] w-[30px] rounded-full overflow-hidden"
          >
            <img src={pro} className="w-full h-full" />
          </div>
          <a
            href="#"
            style={{ color: "var(--text-col)" }}
            className="mr-2 leading-8 font-medium"
          >
            {teacherName}
          </a>
        </div>
        <div className="flex flex-row">
          <span
            style={{ color: "var(--text-col3)" }}
            className="leading-8 font-semibold ml-1"
          >
            {likeCount}
          </span>
          <span className="pt-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgb(91,225,185)"
              className="w-5 h-5 "
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      <div style={{ color: "var(--text-col2)" }} className="mt-2 text-[13px]">
        سطح دوره: {levelName}
      </div>
      <p
        style={{ color: "var(--secondary)" }}
        className=" line-clamp-2 my-4 text-[14px] font-light"
      >
        {desc}
      </p>
      <div
        style={{ borderColor: "var(--text-col3)" }}
        className="border-b mb-[7px]"
      ></div>
      <div className="flex mt-3 mb-5">
        <span
          style={{ color: "var(--text-col3)" }}
          className="grow font-medium"
        >
          هزینه تمام دوره:
        </span>
        <span>
          <span style={{ color: "var(--price)" }} className=" font-medium ml-1">
            {cost}
          </span>
          <span style={{ color: "var(--text-col2)" }} className="font-medium">
            تومان
          </span>
        </span>
      </div>
      <div className="flex justify-center">
        <ButtonLightGreen name="الان ثبت نام کن" sendMeTo="/coursedetail" />
      </div>
    </div>
  );
};

export { CoursesCard };
