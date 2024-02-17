import React, { useEffect, useState } from "react";
import { ReservationCourse } from "../../PanelUtilties/ReservationCourse";
import { HeaderCourses } from "../../Dashboard/LeftDashboard/MyCourses/BottomLeftDashboard/HeaderCourses/HeaderCourses";
import { Pgination } from "../../Dashboard/LeftDashboard/MyCourses/BottomLeftDashboard/Pagination/Pagination";
import { getMyCourse } from "../../../core/services/api/user";

const MyCourses = () => {
  const [mycourse, setMycourse] = useState([]);
  // console.log("jj",mycourse);

  const getmycoursee = async () => {
    const user = await getMyCourse();
    setMycourse(user.listOfMyCourses);
  };
  useEffect(() => {
    getmycoursee();
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: "var(--back-col)" }}
        className="flex flex-col gap-3 rounded-md pt-2 px-6 pb-6"
      >
        <HeaderCourses hiddenHead='w-full border border-red-600 ps-0 justify-around !sm:ps-6'/>
        {mycourse &&
          mycourse.map((item, index) => {
            return (
              <ReservationCourse
                dates={"1401/10/20"}
                key={index}
                courseTitle={item.courseTitle}
                hidden='hidden'
                hiddenRespons='hidden sm:block'
                // onChange={}
                levelName={item.levelName}
                teacheName={item.fullName}
                lastUpdate={item.lastUpdate}
                courseId={item.courseId}
                typeName
              />
            );
          })}
      </div>
    </>
  );
};

export { MyCourses };
