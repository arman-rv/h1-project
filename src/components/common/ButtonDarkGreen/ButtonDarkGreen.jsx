import React from "react";
import { Link } from "react-router-dom";

const ButtonDarkGreen = ({ name, onChange, sendMeTo, className }) => {
  return (
    <Link
      to={sendMeTo}
      onClick={onChange}
      type="button"
      style={{ background: "var(--text-col3)", color: "var(--btn-dark)" }}
      className={`${className} btn border-transparent rounded-full py-2 px-6`}
    >
      {name}
    </Link>
  );
};

export { ButtonDarkGreen };
