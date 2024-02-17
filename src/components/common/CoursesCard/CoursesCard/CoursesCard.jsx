import React, { useEffect, useState } from "react";
import an from "../../../../assets/image/icons8-angular.svg";
import pro from "../../../../assets/image/images.jpg";
import { ButtonLightGreen } from "../../ButtonLightGreen/ButtonLightGreen";
import {
  addReserve,
  deletliked,
  favorite,
  liked,
} from "../../../../core/services/api/course";

const CoursesCard = ({
  title,
  desc,
  cost,
  statusName,
  levelName,
  likeCount,
  teacherName,
  courseRate,
  pic,
  id,
  userIsLiked,
  userLikedId,
  userFavorite,
  userFavoriteId,
  setRand
}) => {
const [isLike,setIsLike]=useState(userIsLiked);
// console.log("ii",isLike);
  

const likee = async (id) => {
    const data = new FormData();
    // console.log("ii",id.id);
    try {
      if (userIsLiked === false) {
        const lii = await liked(id.id);
        setRand(Math.random());
      } else if (userIsLiked === true) {
        data.append("CourseLikeId", id.userLikedId);
        setRand(Math.random());


        // const del={
        //   CourseLikeId:id
        // }
        // const keys=Object.keys(del);
        // keys.forEach((key)=>{
        //   const item=del(key)
        //   data.append(key, item);
        // })
        const liii = await deletliked(data);
      }
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const Favor = async (id) => {
    const favv = { courseId: id.id };

    try {
      const fa = await favorite(favv);
      setRand(Math.random());

    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const addreserveee = async (id) => {
    // console.log("ab", w);
    try {
      const courses = await addReserve(id);

      // setReserve(courses);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  // useEffect(() => {likee()}, [isLike]);

  return (
    <div
      style={{ background: "var(--back-col)" }}
      className="w-[310px] h-[460px] rounded-[20px] mt-[100px] mx-auto flex-col px-[22px] relative pt-[90px] bg-backCol shadow-cardShadow"
    >
      <div className=" h-[155px] w-[155px] rounded-full absolute right-[82.5px] top-[-75px] ">
        <img src={an} className="w-full h-full" />
      </div>
      <div className="flex justify-between  ">
        {/* badge */}
        <span 
         style={{ backgroundColor: "var(--main-col3)", color:"var(--text-col3)" }}
        className=" py-1 px-2.5 border-none rounded text-sm font-medium">
          {statusName}
        </span>
        {/* badge */}

        {/* like */}
        <span className="flex flex-row-reverse gap-2 ">
          <span
            className="cursor-pointer tooltip tooltip-top"
            data-tip="پسندیدن "
            onClick={() => {
              likee({ id, userLikedId });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={userIsLiked === true ? "green" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
          </span>

          <span
            className="cursor-pointer tooltip tooltip-top"
            data-tip="علاقه مندی ها"
            onClick={() => {
              Favor({ id, userFavoriteId });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={userFavorite === true ? "yellow" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>
        </span>

        {/* like */}
      </div>
      <div className=" flex flex-row-reverse gap-2 w-[100%] h-4">
        <span className=" w-6 h-[100%] text-xs flex justify-center ">
          {likeCount}{" "}
        </span>
      </div>
      <h2 className="h-[30px] my-3 line-clamp-2"> {title} </h2>
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
            {courseRate}
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
      <div  style={{ color: "var(--text-col2)" }} className="mt-2 text-[13px]">
        سطح دوره: {levelName}
      </div>
      <p
        style={{ color: "var(--secondary)" }}
        className="h-[45px] line-clamp-2 my-4 text-[14px] font-light"
      >
        {desc}
      </p>
      <div
        style={{ borderColor: "var(--text-col3)" }}
        className="border-b mb-[7px]"
      ></div>
      <div className="flex mt-3 mb-3">
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
      <div className="flex justify-center gap-2">
        <div className="w-[50%]">
        <ButtonLightGreen
          name="جزئیات دوره"
          sendMeTo={"/coursedetail/" + id}
          className='w-full !bg-white !px-[25px] shadow-cardShadow3'
        />
        </div>
        <div className="w-[50%]">
        <ButtonLightGreen
        style={{border: '1px solid red'}}
          name="رزرو دوره"
          className='w-full !px-[25px] shadow-cardShadow3'
          sendMeTo={'/courselis1'}
          onChange={()=>addreserveee(id)}
        />
        </div>
      </div>
    </div>
  );
};

export { CoursesCard };
