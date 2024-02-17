import { Video } from "./Video";
import { Comment } from "./Comment";

import React, { useState } from "react";
import { CardDetail } from "./CardDetail";

const Tabss = ({ prop }) => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-14 w-full">
                <div
                  style={{ borderColor: "var(--text-col3)" }}
                  className="flex flex-col flex-wrap rounded-lg border sm:flex-row"
                >
                  <a
                    onClick={() => handleTabOpen("home")}
                    style={{
                      background: open === "home" ? "var(--main-col)" : "none",
                      color: "var(--text-col4)",
                    }}
                    className={`transition-all duration-500 text-center cursor-pointer rounded-md px-2 py-3 text-sm 2xl:text-base 2xl:px-6 ${
                      open === "home"
                        ? "w-[100%] sm:w-[40%] lg:w-[60%] font-bold"
                        : "w-[100%] sm:w-[20%] font-semibold"
                    }`}
                  >
                    توضیحات دوره
                  </a>
                  <a
                    onClick={() => handleTabOpen("about")}
                    style={{
                      background: open === "about" ? "var(--main-col)" : "none",
                      color: "var(--text-col4)",
                    }}
                    className={`transition-all duration-500 text-center cursor-pointer rounded-md px-2 py-3 text-sm 2xl:text-base 2xl:px-6 ${
                      open === "about"
                      ? "w-[100%] sm:w-[40%] lg:w-[60%] font-bold"
                      : "w-[100%] sm:w-[20%] font-semibold"
                    }`}
                  >
                    ویدئوهای دوره
                  </a>
                  <a
                    onClick={() => handleTabOpen("team")}
                    style={{
                      background: open === "team" ? "var(--main-col)" : "none",
                      color: "var(--text-col4)",
                    }}
                    className={`transition-all duration-500 text-center cursor-pointer rounded-md px-2 py-3 text-sm 2xl:text-base 2xl:px-6 ${
                      open === "team"
                      ? "w-[100%] sm:w-[40%] lg:w-[60%] font-bold"
                      : "w-[100%] sm:w-[20%] font-semibold"
                    }`}
                  >
                    نظرات
                  </a>
                  <a
                    onClick={() => handleTabOpen("company")}
                    style={{
                      background:
                        open === "company" ? "var(--main-col)" : "none",
                      color: "var(--text-col4)",
                    }}
                    className={`lg:hidden transition-all duration-500 text-center cursor-pointer rounded-md px-2 py-3 text-sm 2xl:text-base 2xl:px-6 ${
                      open === "company"
                      ? "w-[100%] sm:w-[40%] lg:w-[60%] font-bold"
                      : "w-[100%] sm:w-[20%] font-semibold"
                    }`}
                  >
                    جزئیات دوره
                  </a>
                </div>
                <TabContent details={prop.courses.describe} tabCategory="home" open={open} />
                <TabContent
                  details={<Video />}
                  tabCategory="about"
                  open={open}
                />
                <TabContent
                  details={<Comment />}
                  tabCategory="team"
                  open={open}
                />
                <TabContent
                  details={<CardDetail courses={prop.courses} />}
                  tabCategory="company"
                  open={open}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Tabss };

const TabContent = ({ open, tabCategory, details }) => {
  return (
    <div>
      <div
        style={{ color: "var(--text-col4)" }}
        className={`py-6 text-lg leading-relaxed text-justify ${
          open === tabCategory ? "block" : "hidden"
        } `}
      >
        {details}
      </div>
    </div>
  );
};
