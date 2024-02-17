import React from "react";
import { Outlet } from "react-router-dom";

import { RightSidePanel } from "../PanelUtilties/RightSidePanel";
import { getProfile } from "../../core/services/api/user";
import { useEffect } from "react";
import { useState } from "react";
import { HederPanel } from "../PanelUtilties/HederPanel/HederPanel";

const PanelStudent = () => {
  const [student, setStudent]=useState([]);
  const getProfileFunc = async ()=>{
    const user=await getProfile();
    setStudent(user);
  
  };
  useEffect(()=>{
    getProfileFunc();
  }, []);
  
  return (
    <div className="w-screen h-screen flex overflow-x-hidden">
      <div
        style={{ backgroundColor: "var(--main-col)" }}
        className="hidden lg:flex w-[20%] h-[100%]"
      >
        <RightSidePanel student={student} />
      </div>
      <div id="LeftSidePanel" className="w-[100%] lg:w-[80%] h-[100%] bg-none flex flex-col gap-4">
        <div
          id="topLeft"
          style={{
            background: "var(--main-col2)",
          }}
          className="w-[100%]"
        >
          <HederPanel />
        </div>
        <div id="bottomLeft" className="w-[100%] h-[83%] flex justify-center">
          <div
            style={{ backgroundColor: "var(--background)" }}
            className="w-[97%] p-6 rounded-md overflow-y-scroll shadow-cardShadow"
          >
            <Outlet context={[student]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PanelStudent };
