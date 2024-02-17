import React from "react";
import { Intro } from "../../components/Landing/Intro/Intro";
import { OurServices } from "../../components/Landing/OurServices/OurServices";
import { Statistics } from "../../components/Landing/Statistics/Statistics";
import { Footer } from "../../components/Footer/Footer";
import { Grouping } from "../../components/Landing/Grouping/Grouping";
import { TopCourses } from "../../components/Landing/TopCourses/TopCourses";
import { Teachers } from "../../components/Landing/Teachers/Teachers";
import { Papers } from "../../components/Landing/Papers/Papers";
import { Suggestions } from "../../components/Landing/Suggestions/Suggestions";
import { SideMenu } from "../../components/common/SideMenu/SideMenu";
import { GroupingSlider } from "../../components/Landing/Grouping/GroupingSlider/GroupingSlider";
import useBreakpoint from "../../hooks/useBreakpoint";
import { ScrollYProgress } from "../../components/common/ScrollYProgress/ScrollYProgress";
import { ScrollRestoration } from "react-router-dom";
import { RightSideMenu } from "../../components/common/SideMenu/RightSideMenu";
import { GoTopButton } from "../../components/common/GoTopButton/GoTopButton";
import { ThemeMenu } from "../../components/common/ThemeMenu/ThemeMenu";

const Landing = () => {
  const breakpoint = useBreakpoint();

  return (
    <>
      <ScrollYProgress />

      <Intro />

      {breakpoint === "md" ||
      breakpoint === "lg" ||
      breakpoint === "xl" ||
      breakpoint === "2xl" ? (
        <OurServices />
      ) : (
        <GroupingSlider />
      )}

      <Statistics />

      {breakpoint === "md" ||
      breakpoint === "lg" ||
      breakpoint === "xl" ||
      breakpoint === "2xl" ? (
        <Grouping />
      ) : null}

      <TopCourses />
      <Teachers />
      <Papers />
      <Suggestions />
      <Footer />

      {/* side menu & scroll progress & gotop btn */}
      {breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl" ? (
        <RightSideMenu />
      ) : (
        <SideMenu />
      )}

      <ScrollRestoration />

      <ThemeMenu />

      <GoTopButton/>
    </>
  );
};

export { Landing };
