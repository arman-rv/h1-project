import * as React from "react";

import { useDarkMode } from "../../../core/utils/darkMode/use-dark-mode.js";

const DarkModeSwitch = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div
      className="flex fle-col justify-center items-center btn-ghost btn-circle tooltip tooltip-right"
      data-tip="Dark mode"
    >
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          className="hidden"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />

        {/* sun icon */}
        <svg
          className="swap-on w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="var(--text-col3)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>

        {/* moon icon */}

        <svg
          className="swap-off w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="var(--text-col3)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </label>
    </div>
  );
};

export { DarkModeSwitch };
