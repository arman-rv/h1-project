import { useEffect } from "react";
import { addReserve, reserved } from "../../core/services/api/course";
import { useState } from "react";

const CardDetail = (d) => {
  const [random,setRandom]=useState(1);

  // const [reserve, setReserve] = useState("");

  const addreservee = async (id) => {
    try {
      const courses = await addReserve(id);
      setRandom(Math.random());

    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };



  const reservedd = async () => {
    try {
      const re = await reserved();
// console.log("rr",re);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  useEffect(() => {
    reservedd();
  }, [random]);

let courses = d.courses;
let startTime = courses.startTime;
let enddTime = courses.endTime;

 let sYear = startTime && startTime.substring(0, 4);
 let sMonth = startTime && startTime.substring(5, 7);
 let sDay = startTime && startTime.substring(8, 10);
 let stTime = sYear+"/"+sMonth+"/"+sDay ;

 let eYear = enddTime && enddTime.substring(0, 4);
 let eMonth = enddTime && enddTime.substring(5, 7);
 let eDay = enddTime && enddTime.substring(8, 10);
 let endTime = eYear+"/"+eMonth+"/"+eDay ;
//console.log(d.courses.techs);

  return (
    <div
      style={{ backgroundColor: "var(--back-col)", color: "var(--text-col4)" }}
      className="flex flex-col gap-8 w-[95%] mx-auto rounded-[15px] shadow-cardShadow  py-5 mt-[39px] "
    >
      <div className="text-sm md:text-base flex flex-col justify-center gap-[15px] px-2">  
          {/* <ul className="rounded-[15px] flex justify-between shadow-cardShadow pr-4  py-4 mx-2">   
                  <img src={node} className='w-[95%] h-[95%]' />
        </ul> */}
        <ul className="rounded-[15px] flex justify-between shadow-cardShadow pr-4  py-4 mx-2">
          <ul className="w-[50%] line-clamp-1 flex flex-col gap-2 text-submitCol font-semibold ">
            <li> مدرس دوره :</li>
            <li>هزینه تمام دوره :</li>
            <li> تکنولوژی های دوره :</li>
            <li>سطح دوره :</li>
            <li>ظرفیت :</li>
            <li> وضعیت دوره :</li>
          </ul>
          <ul className="w-[50%] line-clamp-1 flex flex-col gap-2">
            <li> {d.courses.teacherName} </li>
            <li className="text-red-600">{d.courses.cost} تومان</li>
            <li> {d.courses.techs} </li>
            <li>{d.courses.courseLevelName}</li>
            <li> {d.courses.capacity} نفر</li>
            <li> {d.courses.courseStatusName} </li>
          </ul>
        </ul>
                <ul className="rounded-[15px] flex justify-between shadow-cardShadow pr-4  py-4 mx-2">
          <ul className="w-[50%] line-clamp-1 flex flex-col gap-2 text-submitCol font-semibold ">
            <li>مدت زمان :</li>
            <li>تعداد ویدیو :</li>
            <li> تعداد کامنت :</li>
            <li> امتیاز دوره :</li>
          </ul>
          <ul className="w-[50%] line-clamp-1 flex flex-col gap-2">
            <li>3 ساعت و 55 دقیقه</li>
            <li>27 ویدیو</li>
            <li>{d.courses.commentCount} کامنت </li>
            <li> {d.courses.currentRate} امتیاز </li>
          </ul>
        </ul>
        <ul className="rounded-[15px] flex justify-between  shadow-cardShadow pr-4 py-4 mx-2">
          <ul className="w-[50%] line-clamp-1 flex flex-col gap-2 text-submitCol font-semibold ">
            <li>تاریخ بروزرسانی :</li>
            <li> شروع دوره :</li>
            <li> پایان دوره :</li>
          </ul>
          <ul className="w-[50%] line-clamp-1 flex flex-col gap-2 ">
            <li>1402/07/15</li>
            <li>{stTime} </li>
            <li> {endTime} </li>
          </ul>
        </ul>
      </div>
      <div className="flex justify-center ">
        <button
        style={{ background: "var(--main-col)" }}
          className=" font-bold btn text-textCol4  border-transparent w-[280px] h-[40px]  rounded-lg"
          onClick={() => {
            addreservee(d.courses.courseId);
          }}
        >
          رزرو دوره 
        </button>
      </div>
    </div>
  );
};
export { CardDetail };
