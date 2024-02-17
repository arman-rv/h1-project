import React, { useEffect, useState } from "react";
import { ReservationCourse } from "../../PanelUtilties/ReservationCourse";
import { HeaderCourses } from "../../Dashboard/LeftDashboard/MyCourses/BottomLeftDashboard/HeaderCourses/HeaderCourses";
import { Pgination } from "../../Dashboard/LeftDashboard/MyCourses/BottomLeftDashboard/Pagination/Pagination";
import { reserved } from "../../../core/services/api/course";
import { deletFavorite, getfave } from "../../../core/services/api/userPanel";

const FavCourse = ({ name, date, dates }) => {
  const [fave, setFave] = useState([]);
  const [random,setRandom]=useState(1);
  //console.log("hh", fave);

  const favorite = async () => {
    try {
      const fa = await getfave();
      setFave(fa.favoriteCourseDto);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const delFavor = async (id) => {
    const data=new FormData();

    try {

        data.append("CourseFavoriteId", id)
        const fav = await deletFavorite(data);
        setRandom(Math.random());

    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  }

  useEffect(() => {
    favorite();
  }, [random]);

  return (
    <>
      <div
        style={{ backgroundColor: "var(--back-col)" }}
        className="flex flex-col gap-3 rounded-md pt-2 px-6 pb-6"
      >
        <HeaderCourses name={"وضعیت"} date={"تاریخ پایان"} />

        {fave && fave.map((item, index) => {
          return (
            <ReservationCourse
              key={index}
              courseTitle={item.courseTitle}
              levelName={item.levelName}
              teacheName={item.teacheName}
              courseId={item.courseId}
              favoriteId={item.favoriteId}
              lastUpdate={item.lastUpdate}
              typeName={item.typeName}
              onChange={()=>delFavor(item.favoriteId)}
              
            />
          );
        })}
      </div>
    </>
  );
};

export { FavCourse };
