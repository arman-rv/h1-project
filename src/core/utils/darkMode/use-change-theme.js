import { useEffect, useState } from "react";

const useChangeMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleGreenTheme = () => {
    window.localStorage.setItem("theme", "green1");
    setTheme("green1");
    //('theme is change to green1');

  };

  const toggleBlueTheme = () => {
    window.localStorage.setItem("theme", "blue1");
    setTheme("blue1");
    //console.log('theme is change to blue1');

  };

  const toggleOrangeTheme = () => {
    window.localStorage.setItem("theme", "orange1");
    setTheme("orange1");
    //console.log('theme is change to orange1');

  };

  const togglePinkTheme = () => {
    window.localStorage.setItem("theme", "pink1");
    setTheme("pink1");
    //console.log('theme is change to pink1');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme ,toggleGreenTheme, toggleBlueTheme, toggleOrangeTheme, togglePinkTheme];
};

export { useChangeMode };
