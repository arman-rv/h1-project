import SvgElement from "./SvgElemen";


const Sort = ({selected, setSelected, data}) => {

    return(

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
        <input type="checkbox" id="sortt" className="peer hidden" />
        <label
          htmlFor="sortt"
          className="w-[130px] flex justify-between items-center cursor-pointer"
        >
          {selected.id}
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
            value={selected}
            onChange={(e) => setSelected(e.target)}
            className=""
          >
            {data &&
              data.map((d, index) => {
                return (
                  <li value={d.value} key={index}>
                    <input
                      type="radio"
                      value={d.value}
                      className="cursor-pointer ml-2"
                      id={d.label}
                      name="sort"
                    />
                    <label htmlFor={d.label} className="cursor-pointer">
                      {d.label}{" "}
                    </label>
                  </li>
                );
              })}
          </ul>
        </div>

        <label htmlFor="مرتب سازی">
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
    )
};
export { Sort };
