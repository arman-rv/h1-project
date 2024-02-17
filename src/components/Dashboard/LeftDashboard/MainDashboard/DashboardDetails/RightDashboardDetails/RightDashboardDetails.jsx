import { Link, NavLink } from "react-router-dom";

const RightDashboardDetails = () => {
  return (
    <Link style={{background:"var(--background)"}} className="rounded-xl h-[450px] w-[35%] py-[30px] pr-[30px] cursor-pointer text-sm "
    to="/profile">
        <ul className="text-textCol3 font-extrabold text-xl">
    اطلاعات حساب کاربری

        </ul>
    <ul style={{color:"var(--text-col4)"}} className="mt-[18px] ">
        <li> 
            <ul  className="h-[100%] flex items-center">
                نام:
                <li  className="font-bold mr-[10px]"> محسن </li>
            </ul>
        </li>
    </ul>
    <ul className="mt-[18px]">
        <li> 
            <ul style={{color:"var(--text-col4)"}} className="h-[100%] flex items-center text-black">
                نام خوانوادگی:
                <li   className="mr-[10px] font-bold"> مرتضی زاده </li>
            </ul>
        </li>
    </ul>
    <ul style={{color:"var(--text-col4)"}} className="mt-[18px]">
        <li> 
            <ul className="h-[100%] flex items-center">
                نام کاربری:
                <li  className="mr-[10px] font-bold"> Mohsen </li>
            </ul>
        </li>
    </ul>
    <ul style={{color:"var(--text-col4)"}} className="mt-[18px]">
        <li> 
            <ul className="h-[100%] flex items-center">
             شماره همراه:
                <li className="mr-[10px] font-bold"> 09351913562 </li>
            </ul>
        </li>
    </ul>
    <ul style={{color:"var(--text-col4)"}} className="mt-[18px]">
        <li> 
            <ul className="h-[100%] flex items-center">
                شماره ملی:
                <li  className="mr-[10px] font-bold"> 2165487658 </li>
            </ul>
        </li>
    </ul>
    <ul style={{color:"var(--text-col4)"}} className="mt-[18px]">
        <li> 
            <ul className="h-[100%] flex items-center">
                استان:
                <li className="mr-[10px] font-bold"> مازندران </li>
            </ul>
        </li>
    </ul>            
    <ul style={{color:"var(--text-col4)"}} className="mt-[18px]">
        <li> 
            <ul className="h-[100%] flex items-center">
                ایمیل:
                <li className="mr-[10px] font-bold"> mohsen-mrt@gmail.com </li>
            </ul>
        </li>
    </ul>                        
</Link>
  )
}

export {RightDashboardDetails}