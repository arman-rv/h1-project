import React from "react";

const ServicesCard = ({sPic, sName, sDesc }) => {
  return (
    <div className="w-[370px] p-3 flex gap-2 hover:shadow-cardShadow cursor-pointer rounded-xl">
      <span className="basis-2/5 h-[70%] w-[120px]">
        <img src={sPic} alt="#" className="!h-[100px]" />
      </span>
      <div className="basis-3/5">
        <h4 className="w-[250px] text-xl text-start mb-1 mt-2">{sName}</h4>
        <p
          style={{ color: "var(--text-col)" }}
          className="w-[250px] text-[12px] mt-3 text-justify"
        >
          {sDesc}
        </p>
      </div>
    </div>
  );
};

export { ServicesCard };
