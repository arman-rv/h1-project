import React from "react";
import { WelcomeInformation } from "../../PanelUtilties/WelcomeInformation";
import { ProfileInformation } from "../../PanelUtilties/ProfileInformation";
import { CourseStatus } from "../../PanelUtilties/CourseStatus";
import { RegisterCart } from "../../PanelUtilties/RegisterCart";
import { useOutletContext } from "react-router-dom";

const Pishkhan = () => {
  const [student] = useOutletContext();
  return (
    <div className="flex flex-col gap-4">
      <div className="w-[100%]">
        <WelcomeInformation student={student} />
      </div>
      <div className="w-[100%] flex flex-col md:flex-row justify-evenly gap-4">
        <div className="w-[100%] md:w-[50%] h-[450px]">
        <ProfileInformation student={student} />
        </div>
        <div className="w-[100%] md:w-[50%] h-[450px] flex flex-col items-center gap-4">
          <CourseStatus />
          <RegisterCart />
        </div>
      </div>
    </div>
  );
};

export { Pishkhan };
