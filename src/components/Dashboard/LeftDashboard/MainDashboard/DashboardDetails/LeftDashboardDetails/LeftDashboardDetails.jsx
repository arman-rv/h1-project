import { Link, NavLink } from "react-router-dom";
import picture from "../../../../../../assets/image/03.jpg"


const LeftDashboardDetails = ({name,to}) => {
  return (
    <Link style={{background:"var(--background)"}} className="rounded-xl h-[215px] w-[100%] flex flex-col px-[30px] "
    to={to}>
    <span className="h-[20%] text-textCol3 leading-[50px] font-extrabold text-base mb-2"> {name} </span>
  <div style={{background:"var(--back-col)"}} className="rounded-xl h-[67%] flex  px-[2%] py-[2%]  shadow-cardShadow2">
    <div className="w-[30%] overflow-hidden rounded-[0_10px_10px_0]"> 
        <img className="h-full w-full" src={picture}/>        
     </div>
  <div className="w-[70%] flex flex-col justify-center  gap-2 pr-[2%]">
    <h3 className="text-lg font-semibold text-textCol5"> دوره آموزش جامع انگولار</h3>
    <span style={{color:"var(--text-col4)"}} className="text-sm font-bold">
    <span> مدرس: </span>
    <span> مهندس ولیزاده </span>            
    </span>
    <span className="text-[11px] font-semibold flex gap-[12%] text-textCol">
        <span >
            <span>تاریخ شروع:</span>
            <span> 1402/02/23</span>                    
        </span>
        <span>
            <span>تاریخ پایان:</span>
            <span> 1402/02/23</span>                 
        </span>                
    </span>
    <span className="text-[13px] font-semibold ">
            <span style={{color:"var(--text-col4)"}} > مبلغ: </span>
            <span className="text-red-700 font-semibold"> 900/000</span>
            <span className="text-red-700 font-semibold"> تومان</span>                                      
    </span>

</div>                     
</div>  
 </Link>
  )
}

export  {LeftDashboardDetails}