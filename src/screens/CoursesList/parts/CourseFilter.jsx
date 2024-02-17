import { Slider } from "antd";
import { Formik, Form, Field } from "formik";

const CourseFilter = ({
  catg,
  handleCheckbox,
  C_Type,
  setType_f,
  C_Level,
  setLevel_f,
  costL,
  setCostL,
  costR,
  setCostR,
}) => {
  return (
    <div
      style={{ background: "var(--back-col)", color: "var(--text-col4)" }}
      className="w-full h-full py-1 rounded-2xl shadow-cardShadow"
    >
      <span className="flex justify-center items-center gap-2 mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="var(--text-col4)"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
          />
        </svg>
        <span>فیلترها</span>
      </span>
      <div className="overflow-scroll h-[87%]">
        <ul className="px-6 my-5 flex flex-col gap-3">
          <li>
            <input type="checkbox" id="ctg" className="peer hidden" />
            <label
              htmlFor="ctg"
              className="flex justify-between cursor-pointer mb-1"
            >
              دسته بندی
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--text-col4)"
                className="w-4 h-4 mt-1 mr-4 peer-checked:rotate-12"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <div
              style={{ borderColor: "var(--main-col)" }}
              className="h-0 overflow-hidden peer-checked:h-[185px] border rounded-lg duration-500 "
            >
              <Formik
                initialValues={{
                  check: false,
                }}
              >
                <Form
                  className="mr-5 my-2 flex flex-col"
                  // onChange={(e) => setCat_f(e.target.id)}
                >
                  {catg &&
                    catg.map((d, index) => {
                      return (
                        <li value={d.id} key={index}>
                          <Field
                            type="checkbox"
                            checked={d.check}
                            className="ml-2"
                            id={d.id}
                            name="catt"
                            // checked
                            onChange={handleCheckbox}
                          />
                          <label htmlFor={d.id}>{d.techName} </label>
                        </li>
                      );
                    })}
                </Form>
              </Formik>
            </div>
          </li>

          <li>
            <input type="checkbox" id="type" className="peer hidden" />
            <label
              htmlFor="type"
              className="flex justify-between cursor-pointer mb-1"
            >
              نوع دوره
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--text-col4)"
                className="w-4 h-4 mt-1 mr-4 peer-checked:rotate-12"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <div
              style={{ borderColor: "var(--main-col)" }}
              className="h-0 overflow-hidden peer-checked:h-[60px] border rounded-lg duration-500"
            >
              <ul
                className="mr-5 my-2 flex flex-col"
                onChange={(e) => setType_f(e.target.value)}
              >
                {C_Type &&
                  C_Type.map((d, index) => {
                    return (
                      <li value={d.id} key={index}>
                        <input
                          type="radio"
                          value={d.id}
                          className="ml-2"
                          id={index + 9}
                          name="typee"
                        ></input>
                        <label htmlFor={index + 9}>{d.typeName} </label>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </li>

          <li>
            <input type="checkbox" id="level" className="peer hidden" />
            <label
              htmlFor="level"
              className="flex justify-between cursor-pointer mb-1"
            >
              سطح دوره
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--text-col4)"
                className="w-4 h-4 mt-1 mr-4 peer-checked:rotate-12"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <div
              style={{ borderColor: "var(--main-col)" }}
              className="h-0 overflow-hidden peer-checked:h-[80px] border rounded-lg duration-500 "
            >
              <ul className="mr-5 my-2 flex flex-col">
                {C_Level &&
                  C_Level.map((d, index) => {
                    return (
                      <li key={index}>
                        <input
                          name="levell"
                          value={d.id}
                          type="radio"
                          className="ml-2"
                          id={d.id + 10}
                          onChange={(e) => setLevel_f([e.target.value])}
                        ></input>
                        <label htmlFor={d.id + 10}>{d.levelName} </label>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </li>

          <li>
            <input type="checkbox" id="cost" className="peer hidden" />
            <label
              htmlFor="cost"
              className="flex justify-between cursor-pointer mb-1"
            >
              قیمت
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--text-col4)"
                className="w-4 h-4 mt-1 mr-4 peer-checked:rotate-12"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <div
              style={{ borderColor: "var(--main-col)" }}
              className="h-0 overflow-hidden peer-checked:h-[60px] peer-checked:p-1 border rounded-lg duration-500 "
            >
              <Slider
                max={200000000}
                min={1}
                className="border w-[90%] mx-auto"
                onChange={(f) => setCostL(f[0]) & setCostR(f[1])}
                range
                step={1000000}
                tooltipVisible={false}
                defaultValue={[1, 200000000]}
              />
              <span className="h-[20px] w-[100%] flex justify-between px-2">
                <span className="text-xs">{costR}</span>
                <span className="text-xs">{costL}</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { CourseFilter };
