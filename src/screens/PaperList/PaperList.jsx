import React, { useEffect, useState } from "react";

import { ButtonDarkGreen } from "../../components/common/ButtonDarkGreen/ButtonDarkGreen";
import { PaperCard } from "../../components/common/PaperCard/PaperCard";
import { ScrollRestoration } from "react-router-dom";
import { Search } from "../CoursesList/parts/Search";
import { Sort } from "../CoursesList/parts/Sort";
import { getPaperCat, getpaper } from "../../core/services/api/paper";
import { Category } from "./parts/category";
import { Papers } from "../../components/Landing/Papers/Papers";

const PaperList = () => {
  const [selected, setSelected] = useState({ id: "مرتب سازی" });
  const [searched, setSearched] = useState("");
  const [papers, setPapers] = useState([]);
  const [pCat,setPcat]=useState();
  const [category,setCategory]=useState({categoryName:"دسته بندی"});
  const [randd,setRandd]=useState(1);

   //console.log("ppp",papers);

  const data = [
    { value: "default", label: "مرتب سازی" },
    { value: "title", label: "عنوان" },
    { value: "currentView", label: " پر بازدید " },
    { value: "updateDate", label: "بروزترین " },
  ];



  // console.log(papers.news);

  const getpapers = async ( sort, query, catId) => {
    // console.log("yy",catId);
    try {
      const paper = await getpaper( sort,  query, catId);
      setPapers(paper.news);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const getPapercatg = async () => {
    try {
      const categ = await getPaperCat();
      setPcat(categ);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getPapercatg();
    getpapers(selected.value,searched,category.id);
  }, [selected.value,searched,category.id,randd]);
  return (
    <>
      <div className="w-full h-[120px]  flex flex-col items-center justify-center opacity-[88%] mt-[50px]">
        <h3 className="text-[32px]">لیست مقالات </h3>
      </div>
      <div
        style={{ background: "var(--back-col)" }}
        className="md:container w-[100%] p-4 mb-3 flex flex-col-reverse md:flex-row justify-between gap-5 rounded-none md:rounded-2xl shadow-cardShadow"
      >
        <div className="flex justify-between gap-4 flex-wrap">
        <Sort setSelected={setSelected} selected={selected} data={data} />
        <Category  pCat={pCat} category={category} setCategory={setCategory}/>
        </div>
        <div className="w-[100%] md:w-[40%] lg:w-[30%]">
        <Search setSearched={setSearched} />
        </div>
      </div>
      <div className="container p-0 mx-auto my-[50px] flex flex-col justify-center">
        <div className="p-4 mb-10 md:p-6 flex felx-row flex-wrap justify-around gap-6 rounded-none md:rounded-2xl shadow-none md:shadow-cardShadow">
          {papers &&
            papers.map((papr, index) => {
              // console.log("pp",papr);
              return <PaperCard  papr={papr} key={index} setRandd={setRandd}/>;
            })}
        </div>
        <Papers/>
      </div>

      <ScrollRestoration />
    </>
  );
};

export { PaperList };
