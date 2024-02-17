import angolar from "../../assets/image/demo/05.jpg";
import { Tabss } from "./Tabs";

const Head = (courses) => {
  return (
    <div
      style={{ backgroundColor: "var(--back-col)" }}
      className="w-[95%] mx-auto  rounded-[15px] shadow-cardShadow my-5 pt-4"
    >
      <div className="h-[400px] mx-auto mb-4 flex justify-center items-center">
        <img src={angolar} className="rounded-xl object-cover w-[95%] h-[95%]" />
      </div>
      <div className="w-[95%] h-[60px] md:h-[30px] flex justify-start px-[50px]">
        <h2 className="text-xl sm:text-2xl text-justify">{courses.courses.title} </h2>
      </div>
      <div className="my-[30px] mx-5">
        <Tabss prop={courses} />
      </div>

      <div className="w-[100%] text-justify  mx-auto my-6 px-[50px]"></div>
    </div>
  );
};

export { Head };
