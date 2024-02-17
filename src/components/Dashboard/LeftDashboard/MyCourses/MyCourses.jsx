import { BottomLeftDashboard } from "./BottomLeftDashboard/BottomLeftDashboard";
import { TopLeftDashboard } from "./TopLeftDashboard/TopLeftDashboard";

const MyCourses = () => {
  return (
    <div
      style={{ backgroundColor: "var(--back-col)" }}
      className="h-[520px] w-[60%] rounded-[20px] px-[35px] py-[30px] flex flex-col justify-between"
    >
      <BottomLeftDashboard />
      <div className="flex justify-center">
      
      </div>

    </div>
  );
};
export { MyCourses };
