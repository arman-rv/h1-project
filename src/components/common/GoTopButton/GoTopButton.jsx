import { useState } from "react";

const GoTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      onClick={scrollToTop}
      className="z-[1000] h-[50px] w-[50px] fixed bottom-4 left-4 rounded-full shadow-cardShadow btn !p-0 !m-0 border-none "
      style={{
        display: visible ? "flex" : "none",
        background: "var(--main-col3)",
      }}
    >
      <span className="w-[35px] h-[35px] flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="var(--text-col3)"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export { GoTopButton };
