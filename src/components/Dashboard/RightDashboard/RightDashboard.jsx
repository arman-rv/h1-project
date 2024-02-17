import { Link, NavLink } from "react-router-dom";
import pro from "../../../assets/image/03.jpg";
import { getProfile } from "../../../core/services/api/user";
import { useEffect } from "react";


const RightDashboard = () => {




  return (
    <div
      style={{ background: "var(--back-col)", color: "var(--text-col4)" }}
      className="h-[520px] w-[20%] rounded-[20px] flex-col p-[35px]"
    >
      <div className=" max-w-full h-[110px] flex ">
        <div className=" w-[110px] h-[110px] rounded-full overflow-hidden ">
          <img src={pro} className="w-full h-full " />
        </div>
        <div className=" w-[120px] flex flex-col justify-center">
          <h3
            style={{ color: "var(--text-col3)" }}
            className="text-center font-bold text-2xl "
          >
            Mohsen
          </h3>
          <span
            style={{ color: "var(--text-col)" }}
            className="text-center block my-1 font-bold text-sm"
          >
            محسن مرتضی زاده
          </span>
        </div>
      </div>
 
      <ul className="mt-[40px]">
            <li  className="w-[200px] mt-[18px]">
              <NavLink
                  to="/dashboard"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--text-col3)" : "var(--text-col4)",
                  })}
                  className="font-bold text-base flex">
                    <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>                
                      </span>
                      <span className="mr-[6px]">
                  پیشخوان                  
                        </span>              

                </NavLink>            
          </li>
            <li  className="w-[200px] mt-[18px]">
              <NavLink
                  to="/profile"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--text-col3)" : "var(--text-col4)",
                  })}
                  className="font-bold text-base flex">
                    <span className="">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>                
                    </span>
                    <span className="mr-[6px]">
                    ویرایش پروفایل                
                    </span>              
                </NavLink>            
          </li>
            <li  className="w-[200px] mt-[18px]">
              <NavLink
                  to="/mybasket"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--text-col3)" : "var(--text-col4)",
                  })}
                  className="font-bold text-base flex">
                    <span className="">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
                      </svg>               
                    </span>
                    <span className="mr-[6px]">
                    سبد خرید                    
                    </span>              
                </NavLink>            
          </li>
            <li  className="w-[200px] mt-[18px]">
              <NavLink
                  to="/mycourses"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--text-col3)" : "var(--text-col4)",
                  })}
                  className="font-bold text-base flex">
                    <span className="">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                      </svg>               
                    </span>
                    <span className="mr-[6px]">
                    دوره های من            
                    </span>              
                </NavLink>            
          </li>
            <li  className="w-[200px] mt-[18px]">
              <Link
                  to="/"
                  className=" font-bold text-base flex">
                    <span className="">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>               
                    </span>
                    <span className="mr-[6px]">
                    خروج
                    </span>              
                </Link>            
          </li>          
        </ul>
    </div>
  );
};
export { RightDashboard };
