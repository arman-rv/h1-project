import React, { useEffect, useState } from "react";
import { ReservationCourse } from "../../PanelUtilties/ReservationCourse";
import { HeaderCourses } from "../../Dashboard/LeftDashboard/MyCourses/BottomLeftDashboard/HeaderCourses/HeaderCourses";
import { reserved } from "../../../core/services/api/course";
import { Pagination } from "antd";
import { onChange } from "../../../Redux/reserved-courses";
import { useDispatch } from "react-redux";
import { deletReserve } from "../../../core/services/api/userPanel";

const ReserveCourse = ({className}) => {
  const [reserv, setReserv] = useState([]);
  const [random,setRandom]=useState(1);

  console.log("cc",reserv.length);

  const reservedd = async () => {
    try {
      const re = await reserved();
      setReserv(re);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const delReserve = async (id) => {
  
const data={ id:id}
    try {

        const fav = await deletReserve(data);
        setRandom(Math.random());
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  }

  const dispatch = useDispatch();

  const update = () => {
    dispatch(
      onChange(reserv.length)
    );
  };

  useEffect(() => {
    reservedd();
    update();
  }, [random,reserv.length]);

  return (
    <>
      <div
        style={{ backgroundColor: "var(--back-col)" }}
        className="flex flex-col gap-3 rounded-md pt-2 px-6 pb-6"
      >
        <HeaderCourses hiddenHead='!ps-5' name={"وضعیت"} date={"تاریخ پایان"} />
        {reserv && reserv.map((item, index) => {
          // console.log(item);
          return (
            <ReservationCourse
              key={index}
              courseTitle={item.courseName}
              levelName={item.levelName}
              teacheName={item.teacheName}
              courseId={item.courseId}
              favoriteId={item.favoriteId}
              lastUpdate={item.reserverDate}
              typeName={item.typeName}
              onChange={()=>delReserve(item.reserveId)}
              hiddenRes='hidden sm:block'
              hiddenall='!hidden'
            />
          );
        })}
      </div>
    </>
  );
};



export { ReserveCourse };
