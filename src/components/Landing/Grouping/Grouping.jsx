import g1 from "../../../assets/image/grouping/demo/1.svg";
import g2 from "../../../assets/image/grouping/demo/2.svg";
import g3 from "../../../assets/image/grouping/demo/3.svg";
import g4 from "../../../assets/image/grouping/demo/4.svg";
import g5 from "../../../assets/image/grouping/demo/5.svg";
import g6 from "../../../assets/image/grouping/demo/6.svg";


import { GroupingCard } from "../../common/GroupingCard/GroupingCard";
import { motion } from 'framer-motion';
import { variants } from "../Teachers/varient";
import { getAllCategories } from "../../../core/services/api/grouping";
import { useEffect, useState } from "react";


const container ={
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren:0.3,
      staggerChildren:0.2
    }}
} 

const Grouping = () => {

  const [categories, setCategories] = useState([]);

  //console.log(categories);
    const getCategories = async () => {
      try {
        const allCategories = await getAllCategories();

        setCategories(allCategories);

      } catch (error) {
        throw new Error("ERROR: ", error);
      }
    };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div id="grouping" className="lg:container mx-auto my-[80px] flex flex-col items-center">
      <h3 name="grouping" className="text-[32px]">
        دسته بندی
      </h3>
      <p style={{ color: "var(--text-col4)" }}>
        ما فرصت آماده شدن برای زندگی را فراهم می کنیم
      </p>
      <div className="mt-[60px] mx-6 lg:mx-10 xl:mx-32 grid grid-cols-2 sm:flex sm:flex-wrap gap-6 lg:gap-14 items-center justify-center">
        {categories && categories.map((items,index)=>{
        return <GroupingCard key={index} title={items.techName} pic={g1} desc={items.describe}/>
        })}
      </div>
    </div>
  );
};

export { Grouping };
