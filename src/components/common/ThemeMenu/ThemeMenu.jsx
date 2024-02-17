import { useEffect, useRef, useState } from "react";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";
import { ThemeChange } from "../ThemeChange/ThemeChange";

const ThemeMenu = () => {
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
    <>
      <div
        ref={wrapperRef}
        className="z-[1000] h-[50px] w-[50px] fixed bottom-20 left-4 flex justify-center items-center"
      >
        {/* button */}
        <button
          className="h-[50px] w-[50px] rounded-full shadow-cardShadow flex justify-center items-center btn btn-circle !p-0 !m-0 border-none"
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
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
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
              top: visible ? -120 + "px" : 200 + "px",
            }}
            className="top-[-120px] left-0 bg-transparent flex flex-col gap-3 justify-between z-[1000]"
          >
            <li>
              <ThemeChange />
            </li>
            <li
              style={{
                background: "var(--main-col3)",
              }}
              className="flex justify-center items-center h-[50px] w-[50px] rounded-full shadow-cardShadow"
            >
              <DarkModeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { ThemeMenu };
