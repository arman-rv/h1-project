import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../../screens/Landing/Landing.jsx";
import { Login } from "../../components/Login/Login.jsx";
import { Forget } from "../../components/Forget/Forget.jsx";
import { NewPass } from "../../components/NewPass/NewPass.jsx";
import { Error404 } from "../../components/Error404/Error404.jsx";
import { MainLayout } from "../../components/MainLayout/MainLayout.jsx";
import { CourseDetails } from "../../screens/CourseDetail/CourseDetails.jsx";
import { PaperList } from "../../screens/PaperList/PaperList.jsx";
import { PaperDetails } from "../../components/PaperDetails/PaperDetails.jsx";
import { CoursesList } from "../../screens/CoursesList/CoursesList.jsx";
import { Verify } from "../../components/Login/Verify.jsx";
import { RegisterVerify } from "../../components/Register/RegisterVerify.jsx";
import { EndRegister } from "../../components/Register/EndRegister.jsx";
import { PanelStudent } from "../../components/Panel/PanelStudent.jsx";
import { EditProfile } from "../../components/Panel/PanelPage/EditProfile.jsx";
import { MyCourses } from "../../components/Panel/PanelPage/MyCourses.jsx";
import { ReserveCourse } from "../../components/Panel/PanelPage/ReserveCourse.jsx";
import { Pishkhan } from "../../components/Panel/PanelPage/Pishkhan.jsx";
import { Register } from "../../components/Register/Register.jsx";
import { CoursesCardLayout } from "../../components/common/CoursesCard/CoursesCardLayout.jsx";
import { CoursesCard2Layout } from "../../components/common/CoursesCard/CoursesCard2Layout.jsx";
import { FavCourse } from "../../components/Panel/PanelPage/FavCourse.jsx";
import { ContactUs } from "../../components/ContactUs/ContactUs.jsx";
import { ChangePassword } from "../../components/Panel/PanelPage/ChangePassword.jsx";

const Router = createBrowserRouter([
  { path: "", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/verify", element: <Verify /> },
  { path: "/register", element: <Register /> },
  { path: "/registerVerify", element: <RegisterVerify /> },
  { path: "/endRegister", element: <EndRegister /> },
  { path: "/login/forget", element: <Forget /> },
  { path: "/login/forget/newpass/:ConfigValue?", element: <NewPass /> },
  { path: "*", element: <Error404 /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <CoursesList />,
        children: [
          { path: "/courselis1", element: <CoursesCardLayout /> },
          { path: "/courselis2", element: <CoursesCard2Layout /> },
        ],
      },
      { path: "/coursedetail/:id", element: <CourseDetails /> },
      { path: "/paperlist", element: <PaperList /> },

      { path: "/paperdetail/:id", element: <PaperDetails /> },

      { path: "/contactus", element: <ContactUs /> },
    ],
  },
  {
    path: "/",
    element: <PanelStudent />,
    children: [
      { path: "/dashboard", element: <Pishkhan /> },
      { path: "/profile", element: <EditProfile /> },
      { path: "/mycourses", element: <MyCourses /> },
      { path: "/reservecourse", element: <ReserveCourse /> },
      { path: "/favcourse", element: <FavCourse /> },
      { path: "/changePassword", element: <ChangePassword /> },
    ],
  },
]);

export { Router };
