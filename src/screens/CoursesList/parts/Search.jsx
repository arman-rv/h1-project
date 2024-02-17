import { Field, Form, Formik } from "formik";

const Search = ({setSearched}) => {

    return(
        <div className="w-full">
          <Formik
            initialValues={{ search: "" }}
            onSubmit={(values) => setSearched(values.search)}
          >
            <Form
              style={{ borderColor: "var(--text-col3)" }}
              className="relative w-full h-12 overflow-hidden border flex flex-row rounded-3xl shadow-sm"
            >
              <Field
                name="search"
                style={{
                  background: "var(--background)",
                  color: "var(--text-col4)",
                }}
                className="w-full py-2 px-4 border-none text-sm"
                placeholder="جستجو..."
              />
              <button
                type="submit"
                style={{
                  background: "var(--main-col3)",
                  color: "var(--text-col4)",
                }}
                className="w-[50px] h-full absolute left-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--text-col3)"
                  className="w-6 h-6 mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Form>
          </Formik>
        </div>

    )
};
export { Search };
