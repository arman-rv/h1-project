import { TopLeftDashboard } from "../MyCourses/TopLeftDashboard/TopLeftDashboard";

import { MyBasketBotoom } from "./MyBasketBottom/MyBasketBottom";


const MyBasket = () => {
  return (
    <div
      style={{ backgroundColor: "var(--back-col)" }}
      className="h-[520px] w-[60%] rounded-[20px] px-[35px]"
    >
      <TopLeftDashboard />
      <MyBasketBotoom />
      
    </div>
  );
};
export { MyBasket };
