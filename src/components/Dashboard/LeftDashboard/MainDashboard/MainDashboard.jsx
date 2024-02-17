import { LeftDashboardDetails } from "./DashboardDetails/LeftDashboardDetails/LeftDashboardDetails"
import { RightDashboardDetails } from "./DashboardDetails/RightDashboardDetails/RightDashboardDetails"
import { Link, NavLink } from "react-router-dom";
const MainDashboard = () => {
    return (
    <>
      <div style={{background:"var(--back-col)"}} className='h-[520px] w-[60%] rounded-[20px] py-[35px] px-[35px] flex justify-center gap-5'>
          <RightDashboardDetails/>
          <div className="h-[450px] w-[65%] flex flex-col justify-between items-center">
          <LeftDashboardDetails name="دوره های خریداری شده" to="/mybasket"/>
          <LeftDashboardDetails name="سبد خرید" to="/mycourses"/>
           </div>        
      </div>
    </>
    )
  }
  
  export  {MainDashboard}