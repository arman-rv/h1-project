import React, { useEffect } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { useState } from "react";
import { getallbypgCourseListt } from "../../../core/services/api/course";
import an from "../../../assets/image/icons8-angular.svg";
import { Link } from "react-router-dom";

const SearchModal = () => {
  const [list, setList] = useState();
  //console.log("gg", list);

  const getListt = async (search) => {
    try {
      const courses = await getallbypgCourseListt(search);

      setList(courses.courseFilterDtos);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  
  return (
    <>
      {/* open modal button */}
      <label htmlFor="my_modal_1" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="var(--text-col3)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>

      {/* modal */}
      <input type="checkbox" id="my_modal_1" className="modal-toggle" />
      <div className="modal ">
        <div style={{ background: "var(--background)" }} className="modal-box">
          <SearchInput change={getListt} />
          {list &&
            list.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="flex gap-1 border shadow cursor-pointer mt-2"
                  to={"/coursedetail/" + item.courseId}
                >
                  <span className="">
                    <img src={an} className="w-8 h-8" />
                  </span>
                  <span className="mt-1 flex gap-3">
                    <span>نام دوره:</span>
                    <span className=" w-[110px] text-orange-600">
                      {item.title}
                    </span>
                    <span>قیمت: </span>
                    <span className=" text-red-800 w-[60px]"> {item.cost}</span>
                    <span>سطح دوره:</span>
                    <span> {item.levelName}</span>
                  </span>
                </Link>
              );
            })}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_1">
          Close
        </label>
      </div>
    </>
  );
};

export { SearchModal };
