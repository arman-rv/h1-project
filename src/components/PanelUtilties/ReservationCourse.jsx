import React from "react";
import car from "../../assets/image/03.jpg";
import { Badge } from "antd";
import { deletFavorite } from "../../core/services/api/userPanel";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ReservationCourse = ({ 
  courseTitle,
  onChange,
  levelName,
  teacheName,
  lastUpdate,
  courseId,
  typeName,
  hidden}) => {

    // const delFavor = async (id) => {
    //   const data=new FormData();

    //   try {

    //       data.append("CourseFavoriteId", id)
    //       const fav = await deletFavorite(data);
    //   } catch (error) {
    //     throw new Error("ERROR: ", error);
    //   }
    // }

  return (
    <>
      <div
        style={{
          backgroundColor: "var(--background)",
          color: "var(--text-col4)",
        }}
        className="rounded-[10px] text-xs font-medium flex justify-start h-[65px] text-center leading-[65px] px-2 shadow-cardShadow"
      >
        <Link to={"/coursedetail/" + courseId} className="flex justify-between w-[100%]"> 

        <div className="hidden sm:block w-[8%] h-[70%] my-auto rounded-lg overflow-hidden">
          <img src={car} className="w-full h-full" />
        </div>
        <div className="w-[60%] sm:w-[30%]">   {courseTitle} </div>
        <div className="hidden sm:block w-[30%]"> {teacheName}  </div>
        <div className="w-[20%] sm:w-[10%]"> {levelName} </div>
        <div className="hidden sm:block w-[20%]"> {lastUpdate} </div>
        <div className="w-[20%] sm:w-[10%]"> {typeName} </div>

        </Link>
        <div className={`${hidden} w-[20%] sm:w-[10%]`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--text-col4)"
            className="w-6 h-6 mx-auto mt-5 cursor-pointer ml-[20%]"
            onClick={onChange}
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </div>

      </div>
    </>
  );
};

export { ReservationCourse };
