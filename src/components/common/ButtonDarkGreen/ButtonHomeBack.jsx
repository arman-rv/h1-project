import React from "react";
import { Link } from "react-router-dom";

const ButtonHomeBack = ({ name, onChange, sendMeTo, className }) => {
  return (
    <Link
      to={sendMeTo}
      onClick={onChange}
      type="button"
      style={{
        border: "1px solid",
        borderColor: "var(--text-col3)",
        background: "var(--text-col5)",
        color: "var(--text-col3)",
      }}
      className={`${className} btn w-[400px] border-transparent rounded-md py-2 px-6 text-center`}
    >
      {name}
    </Link>
  );
};

export { ButtonHomeBack };
