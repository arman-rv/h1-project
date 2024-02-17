import React from "react";

const GroupingCard = ({title, pic, desc}) => {
  return (
    
      <div style={{backgroundColor:'var(--back-col)'}} className="hover:scale-[1.1] transition cursor-pointer w-[150px] sm:w-[180px] py-10 px-5 flex flex-col gap-2 items-center rounded-xl shadow-cardShadow">
          <span className="w-[80px] mb-2">
            <img src={pic} alt="" />
          </span>
          <span style={{color:'var(--text-col4)'}} className="font-bold text-[14px] sm:text-[16px] text-center">{title}</span>
          <span style={{color:'var(--text-col4)'}} className=" text-[13px] sm:text-[14px] text-center">{desc}</span>
        </div>
    
  );
};

export {GroupingCard};
