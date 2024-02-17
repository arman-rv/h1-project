import React from "react";
import { RightDashboard } from "../Dashboard/RightDashboard/RightDashboard";
import { Outlet } from "react-router-dom";
import { HeaderSignIn } from "../Header/HederSignIn/HeaderSignIn";
import { HeaderSignOut } from "../Header/HeaderSignOut/HeaderSignOut";
import { useEffect } from "react";
import { getProfile } from "../../core/services/api/user";
import { useState } from "react";

const DashboardLayout = () => {



  return (
    <>
      <HeaderSignIn />
      <div className="flex justify-center gap-7">
        <RightDashboard />
        <Outlet />
      </div>
    </>
  );
};

export {DashboardLayout};
