import React, { useEffect, useRef, useState } from "react";
import {
  getCat,
  getCourseLevel,
  getCourseType,
  getallbypgCourseList,
} from "../../core/services/api/course";
import { Pgination } from "../../components/common/Pagination/Pagination";
import { CoursesCardLayout } from "../../components/common/CoursesCard/CoursesCardLayout";
import { CoursesCard2Layout } from "../../components/common/CoursesCard/CoursesCard2Layout";
import { TopCourses } from "../../components/Landing/TopCourses/TopCourses";
import { CourseFilter } from "./parts/CourseFilter";
import useBreakpoint from "../../hooks/useBreakpoint";
import { ScrollRestoration } from "react-router-dom";
import { Search } from "./parts/Search";
import { Sort } from "./parts/Sort";

const CoursesList = () => {
  const [courseList, setCourseList] = useState([]);
  const [selected, setSelected] = useState({ id: "مرتب سازی" });
  const [searched, setSearched] = useState();
  const [catg, setCatg] = useState([]);
  const [C_Type, setC_Type] = useState("");
  const [C_Level, setC_Level] = useState("");
  const [cat_f, setCat_f] = useState("");
  const [type_f, setType_f] = useState([]);
  const [level_f, setLevel_f] = useState("");
  const [grid, setGrid] = useState(true);
  const [costL, setCostL] = useState(0);
  const [costR, setCostR] = useState();
  const [rand, setRand] = useState(1);
  const [pagee, setPagee] = useState(1);
  const [total, setTotal] = useState([]);

  // console.log("cc",courseList);

  const getList = async (
    sort,
    search,
    cat,
    type,
    level,
    costDown,
    costUp,
    pagee
  ) => {
    try {
      const courses = await getallbypgCourseList(
        sort,
        search,
        cat,
        type,
        level,
        costDown,
        costUp,
        pagee
      );

      setCourseList(courses.courseFilterDtos);
      setTotal(courses.totalCount);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  const getcatg = async () => {
    try {
      const catgg = await getCat();
      setCatg(catgg);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  const getcoursetype = async () => {
    try {
      const coursestype = await getCourseType();
      setC_Type(coursestype);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  const getcourselevel = async () => {
    try {
      const courseslevel = await getCourseLevel();
      setC_Level(courseslevel);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  /* sort&search */
  if (searched === "") {
    setSearched({});
  }

  const data = [
    { value: "default", label: "مرتب سازی" },
    { value: "cost", label: "قیمت" },
    { value: "likeCount", label: "محبوب ترین ها" },
    { value: "courseRate", label: "بروزترین ها" },
  ];

  useEffect(() => {
    getcourselevel();
    getcoursetype();
    getcatg();

    getList.apply(data, [
      selected.value,
      searched,
      cat_f,
      type_f,
      level_f,
      costL,
      costR,
      pagee,
    ]);
  }, [
    selected.value,
    searched,
    cat_f,
    type_f,
    level_f,
    costL,
    costR,
    pagee,
    rand,
  ]);

  /* sort&search */

  /* const ref=useRef();
  const onChange=(e)=>{
clearTimeout(ref.current);
const timeout=setTimeout(()=>{
  setSearched(e.target.value);
}, 1000);
ref.current=timeout;  };*/

  const handleCheckbox = (e) => {
    const checkboxId = e.target.id;
    if (cat_f.includes(checkboxId)) {
      setCat_f(cat_f.filter((item) => item !== checkboxId));
    } else {
      setCat_f([...cat_f, checkboxId]);
    }
  };

  // filter responsive style
  const [filterBar, setFilterBar] = useState(false);

  const toggleFilter = () => {
    if (filterBar === false) {
      setFilterBar(true);
    } else if (filterBar === true) {
      setFilterBar(false);
    }
  };

  const breakpoint = useBreakpoint();

  return (
    <>
      <div className="w-full h-[200px] flex flex-col items-center justify-center opacity-[88%]  font-vazir">
        <h3 className="text-[32px]">لیست دوره ها</h3>
      </div>

      {/* search / sort / filter responsive button / change view */}

      <div
        style={{ background: "var(--back-col)" }}
        className="md:container w-[100%] p-4 mb-3 flex flex-col-reverse md:flex-row justify-between gap-5 rounded-none md:rounded-2xl shadow-cardShadow"
      >
        <div className="flex justify-between gap-4 flex-wrap">
          <div className="flex gap-1">
            {/* change view */}
            <ul
              style={{
                background: "var(--background)",
                borderColor: "var(--text-col3)",
              }}
              className="overflow-hidden border rounded-3xl h-[50px] w-[100px] hidden sm:flex justify-between items-center"
            >
              <li className="btn btn-circle btn-ghost">
                <input
                  id="grid"
                  name="view"
                  type="radio"
                  onClick={() => setGrid(true)}
                  className="hidden"
                />
                <label htmlFor="grid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={grid ? "var(--text-col3)" : "var(--text-col4)"}
                    className="cursor-pointer w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </label>
              </li>
              <li className="btn btn-circle btn-ghost">
                <input
                  id="hh"
                  name="view"
                  type="radio"
                  // value={false}
                  onClick={() => setGrid(false)}
                  className="hidden"
                />
                <label htmlFor="hh">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={grid ? "var(--text-col4)" : "var(--text-col3)"}
                    className="cursor-pointer w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>
                </label>
              </li>
            </ul>
            {/* filter responsive button */}
            <button
              onClick={toggleFilter}
              style={{
                background: "var(--background)",
                borderColor: "var(--text-col3)",
              }}
              className="btn btn-circle btn-ghost border w-[50px] cursor-pointer xl:hidden flex justify-center items-center p-1 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="var(--text-col4)"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
            </button>
          </div>
          <Sort selected={selected} setSelected={setSelected} data={data} />
          {/* sort */}
        </div>

        <div className="w-[100%] md:w-[40%] lg:w-[30%]">
          <Search setSearched={setSearched} />
        </div>
      </div>

      {/* courses / filter */}
      <div className="md:container mx-auto !p-0 w-full relative flex">
        {/* filter */}
        {breakpoint === "xl" || breakpoint === "2xl" ? (
          <div
            style={{ color: "var(--text-col4)" }}
            className="hidden xl:flex w-[20%] h-screen pe-4 py-8 transition-all duration-500"
          >
            <CourseFilter
              catg={catg}
              handleCheckbox={handleCheckbox}
              C_Type={C_Type}
              setType_f={setType_f}
              C_Level={C_Level}
              setLevel_f={setLevel_f}
              costL={costL}
              setCostL={setCostL}
              costR={costR}
              setCostR={setCostR}
            />
          </div>
        ) : (
          <div
            id="filter"
            style={{
              color: "var(--text-col4)",
              display: filterBar ? "flex" : "hidden",
              height: filterBar ? 500 + "px" : 0,
              opacity: filterBar ? 1 : 0,
            }}
            className="xl:hidden absolute z-[1000] top-0 w-[70%] sm:w-[40%] md:w-[30%] lg:w-[25%] py-8 transition-all duration-500"
          >
            <CourseFilter
              catg={catg}
              handleCheckbox={handleCheckbox}
              C_Type={C_Type}
              setType_f={setType_f}
              C_Level={C_Level}
              setLevel_f={setLevel_f}
              costL={costL}
              setCostL={setCostL}
              costR={costR}
              setCostR={setCostR}
            />
          </div>
        )}

        {/* courses */}
        <div className="w-full xl:w-[80%] mx-auto flex flex-col justify-center items-center pt-8">
          {breakpoint === "sm" ||
          breakpoint === "md" ||
          breakpoint === "lg" ||
          breakpoint === "xl" ||
          breakpoint === "2xl" ? (
            <div
              id="courses"
              style={{ color: "var(--text-col4)" }}
              className="w-full h-full p-4 md:p-6 flex flex-col md:felx-row md:flex-wrap justify-center items-center gap-y-12 rounded-none md:rounded-2xl shadow-none md:shadow-cardShadow"
            >
              {grid ? (
                <CoursesCardLayout courseList={courseList} setRand={setRand} />
              ) : (
                <CoursesCard2Layout courseList={courseList} />
              )}
              <Pgination total={total} setPagee={setPagee} />
            </div>
          ) : (
            <div
              style={{ color: "var(--text-col4)" }}
              className="w-full h-full p-4 md:p-6 flex flex-col md:felx-row md:flex-wrap justify-center items-center gap-y-12 rounded-none md:rounded-2xl shadow-none md:shadow-cardShadow"
            >
              <CoursesCardLayout courseList={courseList} />
            </div>
          )}
        </div>
      </div>
      <TopCourses />

      <ScrollRestoration />
    </>
  );
};

export { CoursesList };
