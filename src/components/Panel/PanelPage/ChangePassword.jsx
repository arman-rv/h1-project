import { Field, Form, Formik } from "formik";
import { changePass } from "../../../core/services/api/userPanel";

const ChangePassword = () => {
  const changepassword = async (values) => {
    console.log("jj", values);
    const user = await changePass(values);
    // console.log(user);
  };
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full sm:w-[60%] h-full p-8 flex flex-col justify-center items-center">
          <h3 className="!text-2xl !mb-8">فراموشی رمز</h3>
          <Formik
            initialValues={{
              oldPassword: "",
              newPassword: "",
            }}
            onSubmit={(e) => changepassword(e)}
          >
            <Form
              style={{ background: "var(--back-col)" }}
              className="w-full flex flex-col gap-4 p-8 rounded-lg shadow-cardShadow"
            >
              <Field
                name="oldPassword"
                placeholder="رمز قدیمی"
                style={{
                  background: "var(--background)",
                  borderColor: "var(--text-col3)",
                  borderRadius: 10,
                }}
                className="relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3"
              ></Field>

              <Field
                name="newPassword"
                placeholder="رمز جدید"
                style={{
                  background: "var(--background)",
                  borderColor: "var(--text-col3)",
                  borderRadius: 10,
                }}
              ></Field>
              <button
                style={{
                  background: "var(--text-col3)",
                  color: "var(--btn-dark)",
                }}
                className='btn w-full border-transparent rounded-md py-2 px-6 text-center'
              >
                ثبت تغییرات
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export { ChangePassword };
