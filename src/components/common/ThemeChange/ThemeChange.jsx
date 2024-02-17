import { useEffect, useRef, useState } from "react";
import { useChangeMode } from "../../../core/utils/darkMode/use-change-theme";

const ThemeChange = ({className}) => {
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

  const [
    theme,
    toggleGreenTheme,
    toggleBlueTheme,
    toggleOrangeTheme,
    togglePinkTheme,
  ] = useChangeMode();
  return (
    <div
      ref={wrapperRef}
      style={{
        background: "var(--main-col3)",
      }}
      className="transition-all flex justify-center items-center tooltip tooltip-right dropdown h-[50px] w-[50px] rounded-full !p-0 !m-0 border-none"
      data-tip="تغییر رنگ"
    >
      {/* button */}
      <button
        className={`${className} h-[50px] w-[50px] rounded-full shadow-cardShadow flex justify-center items-center btn btn-circle !p-0 !m-0 border-none`}
        style={{
          background: "var(--main-col3)",
        }}
        onClick={handleMenu}
      >
        <label
          tabIndex={0}
          className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="var(--text-col3)"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9"
            />
          </svg>
        </label>
      </button>

      {/* menu */}
      <div className="relative w-full h-full transition-all flex justify-center items-center">
        <ul
          style={{
            display: visible ? "flex" : "none",
            position: "absolute",
            top: visible ? 0 : 200 + "px",
            background: "var(--back-col)",
          }}
          className="left-[60px] flex gap-3 justify-between z-[1000] p-2 rounded-2xl shadow-cardShadow"
        >
          <li>
            <input
              type="checkbox"
              onChange={toggleGreenTheme}
              checked={theme === "green1"}
              data-tip="سبز"
              className="focus:bg-mainCol2 cursor-pointer p-0 w-[30px] h-[30px] border border-black rounded-full bg-mainCol2 tooltip tooltip-top"
            ></input>
          </li>
          <li>
            <input
              type="checkbox"
              onChange={toggleBlueTheme}
              checked={theme === "blue1"}
              data-tip="آبی"
              className="cursor-pointer p-0 w-[30px] h-[30px] border border-black rounded-full bg-blueTheme tooltip tooltip-top"
            ></input>
          </li>
          <li>
            <input
              type="checkbox"
              onChange={toggleOrangeTheme}
              checked={theme === "orange1"}
              data-tip="نارنجی"
              className="cursor-pointer p-0 w-[30px] h-[30px] border border-black rounded-full bg-orangeTheme tooltip tooltip-top"
            ></input>
          </li>
          <li>
            <input
              type="checkbox"
              onChange={togglePinkTheme}
              checked={theme === "pink1"}
              data-tip="صورتی"
              className="cursor-pointer p-0 w-[30px] h-[30px] border border-black rounded-full bg-pinkTheme tooltip tooltip-top"
            ></input>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { ThemeChange };
