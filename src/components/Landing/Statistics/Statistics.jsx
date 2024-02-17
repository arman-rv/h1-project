import React, { useEffect, useState } from "react";

import teacher from "../../../assets/image/statistics/personal-account-account-svgrepo-com.svg";
import stu from "../../../assets/image/statistics/social-contact-svgrepo-com.svg";
import courses from "../../../assets/image/statistics/movie-svgrepo-com.svg";
import papers from "../../../assets/image/statistics/record-svgrepo-com.svg";
import { getLandingReport } from "../../../core/services/api/landing";

const Statistics = () => {
  const[report,setReport]= useState([]);

 //console.log(report.teacherCount)

  useEffect(() => {
    const allReports = async () => {
      try {
        const getReport = await getLandingReport();
        //console.log(getCoursess);
        setReport(getReport);
      } catch (error) {
        throw new Error("ERROR: ", error);
      }
    };

    allReports();
  }, []);
  
  return (
    <div
      style={{ background: "var(--statistics-back)" }}
      className="w-[90%] px-[40px] sm:px-[60px] md:px-0 mx-auto border-none rounded-xl  my-[40px] grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-16 lg:gap-32 xl:gap-40 py-[50px] justify-center"
    >
      <div className="flex flex-col gap-2 items-center">
        <span className="w-[60px] sm:w-[80px] mb-2">
          <img src={teacher} alt="" />
        </span>
        <span
          style={{ color: "var(--text-col4)" }}
          className="font-extrabold text-[18px] sm:text-[20px]"
        >
          آموزگار حرفه ای
        </span>
        <span
          style={{ color: "var(--text-col4)" }}
          className="font-extrabold text-[35px]"
        >
         {report.teacherCount} 
        </span>
        
      </div>

      <div className="flex flex-col gap-2 items-center">
        <span className="w-[60px] sm:w-[80px] mb-2">
          <img src={stu} alt="" />
        </span>
        <span
          style={{ color: "var(--text-col4)" }}
          className="font-extrabold text-[18px] sm:text-[20px]"
        >
          دانشجو        
        </span>
        <span
          style={{ color: "var(--text-col4)" }}
          className="font-extrabold text-[35px]"
        >
           {report.studentCount} 
        </span>
        </div>

      <div className="flex flex-col gap-2 items-center">
        <span className="w-[60px] sm:w-[80px] mb-2">
          <img src={courses} alt="" />
        </span>
        <span
          style={{ color: "var(--text-col4)" }}
          className="font-extrabold text-[18px] sm:text-[20px]"
        >
          دوره آموزشی        
        </span>
        <span
          style={{ color: "var(--text-col4)" }}
          className="font-extrabold text-[35px]"
        >
           {report.courseCount}
        </span>
        </div>

      <div className="flex flex-col gap-2 items-center">
        <span className="w-[60px] sm:w-[80px] mb-2">
          <img src={papers} alt="" />
        </span>
        <span
          style={{ color: "var(--text-col4)" }}
          className="font-extrabold text-[18px] sm:text-[20px]"
        >
          مقاله آموزشی        
        </span>
        <span
          style={{ color: "var(--text-col4)" }}
          className="font-extrabold text-[35px]"
        >
          {report.newsCount} 
        </span>
      </div>
    </div>
  );
};

export { Statistics };
