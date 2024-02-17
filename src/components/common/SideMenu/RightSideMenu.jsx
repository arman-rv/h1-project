import * as React from "react";
import { SearchModal } from "../SearchModal/SearchModal";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Logo from "../../../assets/image/h1.svg";
import proImg from "../../../assets/image/images.jpg";

import { MenuSvgCourses } from "./MenuSvg/MenuSvgCourses";
import { MenuSvgpapers } from "./MenuSvg/MenuSvgPapers";
import { MenuSvgHome } from "./MenuSvg/MenuSvgHome";
import { MenuSvgCategoris } from "./MenuSvg/MenuSvgCategoris";
import { MenuSvgAboutUs } from "./MenuSvg/MenuSvgAboutUs";

import { useChangeMode } from "../../../core/utils/darkMode/use-change-theme.js";
import {
  getItem,
  removeItem,
} from "../../../core/services/common/storage.services.js";
import { ReservedBagModal } from "../ReservedCoursesModal/ReservedBagModal.jsx";

const RightSideMenu = () => {
  const paage = [
    { name: "صفحه اصلی", goTo: "/", svg: <MenuSvgHome /> },
    // { name: "دسته بندی", goTo: "*", svg: <MenuSvgCategoris /> },
    { name: "دوره ها", goTo: "/courselis1", svg: <MenuSvgCourses /> },
    { name: "مقالات", goTo: "/paperlist", svg: <MenuSvgpapers /> },
    { name: "درباره ما", goTo: "/contactus", svg: <MenuSvgAboutUs /> },
  ];

  const navigate = useNavigate();

  const logedIn = getItem("token");

  //console.log("logedIn: " + logedIn);

  const logOut = () => {
    removeItem("token");
    navigate("/");
  };

  window.onscroll = () => {
    if (window.scrollY > 400) {
      rightSideBar.className =
        "flex flex-col justify-between opacity-[1] py-4 h-screen w-[50px] z-100 fixed right-0 top-0 transition-all duration-1000";
    } else {
      rightSideBar.className =
        "fixed right-[-50px] top-0 flex flex-col justify-between opacity-[1] py-4 h-screen w-[50px] z-100 transition-all duration-1000";
    }
  };

  const [
    theme,
    toggleGreenTheme,
    toggleBlueTheme,
    toggleOrangeTheme,
    togglePinkTheme,
  ] = useChangeMode();

  return (
    <div
      id="rightSideBar"
      style={{ background: "var(--main-col3)" }}
      className="fixed right-[-50px] top-0 rounded-l-xl hidden lg:flex flex-col justify-between opacity-[1] py-4 h-screen w-[50px] z-100 transition-all duration-1000"
    >
      {/* top */}
      <div className="relative top-0 flex flex-col justify-center">
        <span className="h-[40px] mx-auto">
          <img src={Logo} alt="" className="h-[90%]" />
        </span>
      </div>

      {/* center */}

      <div className="relative top-0 flex flex-col">
        <ul className="menu menu-vertical gap-1 text-base p-0">
          {paage.map(({ name, goTo, svg }) => (
            <li key={name} lin={goTo}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--text-col3)" : "var(--text-col4)",
                  backgroundColor: isActive
                    ? "rgba(20,20,20,0.1)"
                    : "transparent",
                  padding: 0,
                })}
                to={goTo}
              >
                <div
                  className="flex fle-col justify-center tooltip tooltip-left"
                  data-tip={name}
                >
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    {svg}
                  </label>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* bottom */}
      <div className="relative top-0 flex flex-col">
        <div
          className="flex fle-col justify-center tooltip tooltip-left"
          data-tip="جستجو"
        >
          <SearchModal />
        </div>

        {logedIn ? (
          <>
            <ReservedBagModal />

            <div style={{color:'var(--text-col4)'}} className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={proImg} />
                </div>
              </label>
              <ul
                tabIndex={0}
                style={{ background: "var(--back-col)" }}
                className="right-[100%] bottom-0 menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-cardShadow bg-base-100 rounded-box w-40"
              >
                <li>
                  <Link to="/dashboard">پنل دانشجو</Link>
                </li>
                <li>
                  <Link to="/profile">ویرایش پروفایل</Link>
                </li>
                <li>
                  <button onClick={logOut}>خروج</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="flex fle-col justify-center btn btn-ghost btn-circle tooltip tooltip-left"
            data-tip="ورود/ثبت نام"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="var(--text-col3)"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export { RightSideMenu };
