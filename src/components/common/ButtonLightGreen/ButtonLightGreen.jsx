import React from "react";
import { Link } from "react-router-dom";

const ButtonLightGreen = ({ name, onChange, sendMeTo, className,addreserveee,id }) => {
  return (
    <Link
      to={sendMeTo}
      onClick={onChange}
      type="button"
      style={{ background: "var(--main-col)", borderColor: "var(--main-col)"}}
      className={`${className} btn text-textCol4 border-transparent rounded-[12px] px-[40px] py-[10px] my-5 font-bold`}
    >
      {name}
    </Link>
  );
};

export { ButtonLightGreen };
