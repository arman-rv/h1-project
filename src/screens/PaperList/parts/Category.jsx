// import { useState } from "react";
import SvgElement from "../../CoursesList/parts/SvgElemen";

const Category = ({ pCat, category, setCategory }) => {

  return (
    <div
    htmlFor="fl"
      type="button"
      style={{
        background: "var(--background)",
        color: "var(--text-col4)",
        borderColor: "var(--text-col3)",
      }}
      className="relative border h-[50px] w-[190px] gap-3 rounded-3xl flex justify-between items-center px-3"
    >
      <input type="checkbox" id="catt" className="peer hidden" />
      <label
        htmlFor="catt"
        className="w-[130px] flex text-xs justify-between items-center cursor-pointer"
      >
        {category && category?.categoryName}

        {/* svg element */}
        <SvgElement />
      </label>

      <div
        style={{
          color: "var(--text-col4)",
          background: "var(--back-col)",
        }}
        className="z-[1000] rounded-lg p-4 border w-[190px] absolute hidden top-[40px] right-0 overflow-hidden peer-checked:block duration-500 mt-3"
      >
        <ul
          // value={category}
          className=""
        >
          {pCat &&
            pCat?.map((d, index) => {
              return (
                <li  key={index}>
                  <input
                    type="radio"
                    value={d.id}
                    className="cursor-pointer ml-2"
                    id={d.id}
                    name="check"
                    onChange={() => {setCategory(d)}}

                  />
                  <label htmlFor={d.id} className="cursor-pointer">
                    {d.categoryName}{" "}
                  </label>
                </li>
              );
            })}
        </ul>
      </div>

      <label
    //    onClick={setRad(false)}
       >
        <input className="hidden" type="radio" name="check" onChange={() => {setCategory({categoryName:"دسته بندی"})}}
/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="var(--text-col3)"
          className="w-4 h-4 cursor-pointer"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>
    </div>
  );
};
export { Category };
