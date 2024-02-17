import React from "react";
import { ButtonDarkGreen } from "../common/ButtonDarkGreen/ButtonDarkGreen";
import jpg from "../../assets/image/jpjp.jpeg";

const ProfileInformation = (st) => {
  return (
    <div className="w-full h-[450px]  rounded-md overflow-hidden shadow-cardShadow">
      <div style={{background:"var(--main-col2)"}} className="w-[100%] h-[15%] flex justify-center items-center ">
        <h2 style={{color:'var(--darkblue)'}}>اطلاعات پروفایل</h2>
      </div>
      <div style={{background:"var(--back-col)"}} className="w-[100%] h-[85%] flex flex-col justify-center items-center">
        <div className="w-[120px] h-[120px] rounded-full border-2 border-black overflow-hidden">
          <img className="rounded-full " src={jpg} alt="" />
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center">
          <h2 className="mt-3"> {st.student.fName}  {st.student.lName}</h2>
          <li className="w-[80%] flex justify-center gap-3 h-[35px] mt-3">
            <li className="w-[40%] flex justify-start items-center">
              <h4 className="text-base md:text-lg">نقش :</h4>
            </li>
            <li className="w-[60%] flex justify-start">
              <p href="">برنامه نویس فرانت اند</p>
            </li>
          </li>
          <li className="w-[80%] flex justify-center gap-3 h-[35px] mt-3">
            <li className="w-[40%] flex justify-start">
              <h4 className="text-base md:text-lg">ایمیل :</h4>
            </li>
            <li className="w-[60%] flex justify-start">
              <p href="">{st.student.email}</p>
            </li>
          </li>
          <li className="w-[80%] flex justify-center gap-3 h-[35px] mt-3">
            <li className="w-[40%] flex justify-start">
              <h4 className="text-base md:text-lg">تلفن همراه :</h4>
            </li>
            <li className="w-[60%] flex justify-start">
              <p href="">{st.student.phoneNumber}</p>
            </li>
          </li>
          <ButtonDarkGreen name="ویرایش" sendMeTo='/profile'  />
        </div>
      </div>
    </div>
  );
};

export { ProfileInformation };
