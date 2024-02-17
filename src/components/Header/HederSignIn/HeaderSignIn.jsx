import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SearchModal } from "../../common/SearchModal/SearchModal";

import Logo from "../../../assets/image/h1.svg";
import proImg from "../../../assets/image/images.jpg";
import {
  getItem,
  removeItem,
} from "../../../core/services/common/storage.services";
import { ReservedBagModal } from "../../common/ReservedCoursesModal/ReservedBagModal";
import { toast } from "react-toastify";

const HeaderSignIn = () => {
  const paage = [
    { name: "صفحه اصلی", goTo: "/" },
    // { name: "دسته بندی", goTo: "/#grouping" },
    { name: "دوره ها", goTo: "/courselis1" },
    { name: "مقالات", goTo: "/paperlist" },
    { name: "درباره ما", goTo: "/contactus" },
  ];

  const navigate = useNavigate();

  const logedIn = getItem("token");

  const logOut = () => {
    removeItem("token");
    toast.success('خروج با موفقیت انجام شد')
    navigate("/");
  };

  return (
    <div
      className="navbar"
      style={{
        boxShadow: "none",
        color: "var(--text-col4)",
        fontFamily: "vazir",
      }}
    >
      <div className="container mx-auto w-[100%] flex justify-between">
        <div className="flex navbar-start lg:basis-1/5">
          <div className="dropdown">
            <label tabIndex={0} className="p-2 btn btn-ghost lg:hidden">
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
              {paage.map(({ name, goTo }) => (
                <li key={name} lin={goTo}>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "var(--text-col3)" : "var(--text-col4)",
                      backgroundColor: isActive
                        ? "rgba(20,20,20,0.1)"
                        : "transparent",
                      fontWeight: isActive ? "bold" : "light",
                    })}
                    className="hover:bg-slate-300"
                    to={goTo}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="flex px-2 btn btn-ghost normal-case text-xl">
            <span className="h-[40px] pl-[10px]">
              <img src={Logo} alt="" className="h-[100%]" />
            </span>
            <span className="hidden sm:block">آکادمی اچ وان</span>
          </Link>
        </div>
        <div className="navbar-center lg:basis-3/5 hidden lg:flex lg:justify-center">
          <ul className="menu menu-horizontal px-1 text-base">
            {paage.map(({ name, goTo }) => (
              <li key={name} lin={goTo}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "var(--text-col3)" : "var(--text-col4)",
                    backgroundColor: isActive
                      ? "rgba(20,20,20,0.1)"
                      : "transparent",
                    fontWeight: isActive ? "bold" : "light",
                  })}
                  to={goTo}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end lg:basis-1/5 flex justify-end">
          <div className="flex">
            <SearchModal />

            {logedIn ? (
              <>
                <ReservedBagModal/>
                <div className="dropdown">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
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
    </div>
  );
};

export { HeaderSignIn };
