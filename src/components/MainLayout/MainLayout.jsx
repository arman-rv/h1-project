import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { HeaderSignIn } from "../Header/HederSignIn/HeaderSignIn";
import { ScrollYProgress } from "../common/ScrollYProgress/ScrollYProgress";
import { SideMenu } from "../common/SideMenu/SideMenu";
import useBreakpoint from "../../hooks/useBreakpoint";
import { GoTopButton } from "../common/GoTopButton/GoTopButton";
import { ThemeMenu } from "../common/ThemeMenu/ThemeMenu";

const MainLayout = () => {
  const breakpoint = useBreakpoint();

  return (
    <>
      <div
        style={{
          background: "var(--intro)",
        }}
      >
        <HeaderSignIn />
      </div>
      <Outlet />
      <Footer />

      {/* side menu & scroll progress & gotop btn */}

      <ScrollYProgress />

      <SideMenu />

      <ThemeMenu />

      <GoTopButton />
    </>
  );
};

export { MainLayout };
