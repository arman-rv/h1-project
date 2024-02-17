import * as React from "react";
import { SearchModal } from "../SearchModal/SearchModal";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Logo from "../../../assets/image/h1.svg";
import proImg from "../../../assets/image/images.jpg";

import { MenuSvgCourses } from "./MenuSvg/MenuSvgCourses";
import { MenuSvgpapers } from "./MenuSvg/MenuSvgPapers";
import { MenuSvgHome } from "./MenuSvg/MenuSvgHome";
import { MenuSvgCategoris } from "./MenuSvg/MenuSvgCategoris";
import { MenuSvgAboutUs } from "./MenuSvg/MenuSvgAboutUs";
import {
  getItem,
  removeItem,
} from "../../../core/services/common/storage.services";
import { ReservedBagModal } from "../ReservedCoursesModal/ReservedBagModal";

const SideMenu = () => {
  const paage = [
    { name: "صفحه اصلی", goTo: "/", svg: <MenuSvgHome /> },
    // { name: "دسته بندی", goTo: "*", svg: <MenuSvgCategoris /> },
    { name: "دوره ها", goTo: "/courselis1", svg: <MenuSvgCourses /> },
    { name: "مقالات", goTo: "/paperlist", svg: <MenuSvgpapers /> },
    { name: "درباره ما", goTo: "/contactus", svg: <MenuSvgAboutUs /> },
  ];

  const navigate = useNavigate();

  const logedIn = getItem("token");

  //console.log('logedIn: ' + logedIn);

  const logOut = () => {
    removeItem("token");
    navigate("/");
  };

  window.onscroll = () => {
    if (window.scrollY > 300) {
      sideBar.className =
        "fixed flex h-[60px] px-4 pt-[7px] pb-[2px] right-0 left-0 top-0 opacity-[1] z-[1000] transition-all duration-1000 shadow-cardShadow";
    } else {
      sideBar.className =
        "absolute flex h-[50px] px-4 top-[-200px] right-0 left-0 opacity-[0] z-[1000] transition-all duration-1000";
    }
  };

  return (
    <div
      id="sideBar"
      style={{
        background: "var(--main-col3)",
        color: "var(--text-col4)",
        fontFamily: "vazir",
      }}
      className="absolute flex h-[50px] px-4 top-[-200px] right-0 left-0 opacity-[0] z-40 transition-all duration-1000 shadow-cardShadow"
    >
      <div className="container mx-auto flex justify-between ">
        {/* top */}
        <div className="relative right-0 basis-1/2 md:basis-1/4 flex items-center justify-start">
          <div className="dropdown">
            <label tabIndex={0} className="p-2 btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="var(--text-col3)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              style={{ background: "var(--back-col)" }}
              className="text-base menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-cardShadow bg-base-100 rounded-box w-52"
            >
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
                    <div className="flex justify-center items-center tooltip tooltip-bottom">
                      <label tabIndex={0} className="btn btn-ghost btn-circle">
                        {svg}
                      </label>
                      <span>{name}</span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <span className="h-[40px]">
            <img src={Logo} alt="" className="h-[90%]" />
          </span>
          <span
            style={{ color: "var(--text-col3)" }}
            className="hidden sm:block ms-4 normal-case text-xl"
          >
            آکادمی اچ وان
          </span>
        </div>

        {/* center */}

        <div className="relative top-0 basis-1/2 hidden md:flex items-center justify-center">
          <ul className="menu menu-horizontal text-base gap-2 p-0">
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
                    className="flex fle-col justify-center tooltip tooltip-bottom"
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
        <div className="relative right-0 basis-1/2 md:basis-1/4 flex items-center justify-end">
          <div
            className="flex fle-col justify-center tooltip tooltip-bottom"
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
                  className="left-0 menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-cardShadow bg-base-100 rounded-box w-40"
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
              style={{
                background: "var(--main-col)",
                color: "var(--text-col4)",
                border: "none",
              }}
              to="/login"
              className="btn"
            >
              ورود / ثبت نام
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { SideMenu };
