import React from "react";
import { Link } from "react-router-dom";

const ButtonDarkGreenTall = ({ name, className }) => {
  return (
    <button
      type="submit"
      style={{
        background: "var(--text-col3)",
        color: "var(--btn-dark)",
      }}
      className={`${className} btn w-full border-transparent rounded-md py-2 px-6 text-center`}
    >
      {name}
    </button>
  );
};

export { ButtonDarkGreenTall };
