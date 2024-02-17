import { Field, Form, Formik } from "formik";

const SearchInput = ({ change }) => {
  const handleSearch = (e) => change(e.search);

  return (
    <div className="w-[100%]">
      <label
        htmlFor="search"
        className="sr-only block text-sm font-semibold text-heading"
      >
        جستجو
      </label>
      <div className="w-full relative mt-2 flex">
        <Formik initialValues={{ search: "" }} onSubmit={handleSearch}>
          <Form className="w-full flex">
            <Field
              name="search"
              placeholder="جستجو ..."
              style={{ backgroundColor: "var(--back-col)" }}
              className="border-none block w-full rounded-xl px-2 py-2.5 pl-11 pr-4 font-semibold text-heading placeholder:text-textCol3 focus:bg-mainCol2 focus:outline-none focus:ring-0 sm:text-sm shadow-cardShadow"
            />
            <div className=" absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-2 focus-within:z-20">
              <button type="submit" className="w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  className="w-5 h-5"
                  style={{ stroke: "var(--text-col3)" }}
                  cursor="pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { SearchInput };
