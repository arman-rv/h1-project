import shot from "../../assets/image/shut.svg";

const Video = () => {
  return (
    <div
      style={{ color: "var(--text-col4)" }}
      className="w-full mx-auto rounded-[15px] pt-5 pb-6"
    >
      <div className="w-[100%] h-[30px] mx-auto px-[50px]">
        <h2 className="text-2xl md:text-3xl">ویدیوهای دوره</h2>
      </div>
      <div className="w-[100%]  rounded-xl mx-auto mt-[40px]">
        <img src={shot} className="w-[100%] h-[100%]" />
      </div>
      <div
        style={{
          backgroundColor: "var(--text-col5)",
          color: "var(--text-col4)",
        }}
        className="text-sm md:text-lg flex flex-col gap-y-5 w-[100%] mx-auto py-4 mt-7 shadow-cardShadow rounded-lg"
      >
        <div className="w-[90%] h-[30px] border-b border-b-black border-red-900 mx-auto grid grid-rows-2 justify-items-stretch">
          <span className="place-self-start">ویدیو اول : آشنایی با دوره</span>
          <span className="hidden sm:flex  justify-self-end ml-8">00:28:00</span>
          <span className="justify-self-end flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="var(--text-col3)"
              className="w-5 md:w-6 h-5 md:h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="w-[90%] h-[30px] border-b border-b-black mx-auto grid grid-rows-2 justify-items-stretch ">
          <span className="place-self-start">
            ویدیو دوم : آشنایی با جاوا اسکریپت
          </span>
          <span className="hidden sm:flex justify-self-end ml-8">00:53:00</span>
          <span className="justify-self-end flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="var(--text-col3)"
              className="w-5 md:w-6 h-5 md:h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="w-[90%] h-[30px] border-b border-b-black mx-auto grid grid-rows-2 justify-items-stretch ">
          <span className="place-self-start">
            ویدیو سوم : آشنایی با جاوا اسکریپت
          </span>
          <span className="hidden sm:flex justify-self-end ml-8">01:42:00</span>
          <span className="justify-self-end flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="var(--text-col3)"
              className="w-5 md:w-6 h-5 md:h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export { Video };
