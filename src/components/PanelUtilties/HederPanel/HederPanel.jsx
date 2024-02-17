import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Logo from "../../../assets/image/h1.svg";
import proImg from "../../../assets/image/images.jpg";
import {
  getItem,
  removeItem,
} from "../../../core/services/common/storage.services";
import { RightSidePanel } from "../RightSidePanel";
import { getProfile } from "../../../core/services/api/user";
import { ReservedBagModal } from "../../common/ReservedCoursesModal/ReservedBagModal";
import { ThemeChange } from "../../common/ThemeChange/ThemeChange";
import { DarkModeSwitch } from "../../common/DarkModeSwitch/DarkModeSwitch";

const HederPanel = () => {
  const [student, setStudent] = useState([]);
  const getProfileFunc = async () => {
    const user = await getProfile();
    setStudent(user);
  };
  useEffect(() => {
    getProfileFunc();
  }, []);

  const navigate = useNavigate();

  const logedIn = getItem("token");

  //console.log("logedIn: " + logedIn);

  const logOut = () => {
    removeItem("token");
    navigate("/");
  };

  const [visible, setVisible] = useState(false);

  const handleMenu = () => {
    if (visible === false) {
      setVisible(true);
    } else if (visible === true) {
      setVisible(false);
    }
  };
  //console.log(visible);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      };
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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
          <div>
            <button
              onClick={handleMenu}
              className="p-2 btn btn-circle btn-ghost lg:hidden"
            >
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
            </button>
            <div
              ref={wrapperRef}
              style={{
                display: visible ? "flex" : "hidden",
                position: "absolute",
                right: visible ? 0 : -300 + "px",
                opacity: visible ? 1 : 0,
              }}
              className="h-screen w-[250px] top-0 right-0 z-[1000] duration-500 shadow-cardShadow transition-all"
            >
              <RightSidePanel student={student} />
            </div>
          </div>

          <Link to="/" className="flex px-2 btn btn-ghost normal-case text-xl">
            <span className="h-[40px] pl-[10px]">
              <img src={Logo} alt="" className="h-[100%]" />
            </span>
            <span style={{color:'var(--text-col3)'}} className="hidden sm:block">آکادمی اچ وان</span>
          </Link>
        </div>
        <div className="navbar-end lg:basis-1/5 flex justify-end">
          <div className="flex">
            <ThemeChange className='shadow-none'/>
            <DarkModeSwitch/>
            {logedIn ? (
              <div className="flex">
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
              </div>
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

export { HederPanel };
