import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { ButtonDarkGreenTall } from "../common/ButtonDarkGreen/ButtonDarkGreenTall";
import { ButtonHomeBack } from "../common/ButtonDarkGreen/ButtonHomeBack";
import { ForgetPassAPI } from "../../core/services/api/resetpass";

import signin from "../../assets/image/forgot.svg";
import { motion } from "framer-motion";
import { variants } from "../Landing/Teachers/varient";
import { Link } from "react-router-dom";

const Forget = () => {
  const validation = yup.object().shape({
    email: yup
      .string()
      .required("این فیلد اجباریست")
      .matches(/[@]/, "ایمیل وارد شده اشتباه است")
      .matches(/[.]/, "ایمیل وارد شده اشتباه است"),
  });

  const ForgetPassword = async (values) => {
    const userEmail = {
      email: values.email,
      baseUrl: "http://localhost:5173/login/forget/newpass",
    };
    //console.log(userEmail);

    const user = await ForgetPassAPI(userEmail);
    //console.log(user);
  };

  return (
    <>
      <div
        style={{ backgroundColor: "var(--background)" }}
        className="w-screen h-screen flex items-center justify-center gap-3"
      >
        <motion.div
          style={{ backgroundColor: "var(--back-col)" }}
          className="w-[80%] h-[90%] flex flex-row justify-center items-center rounded-2xl shadow-cardShadow"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* right side: login form */}

          <div className="relative w-[100%] md:w-[50%] h-[100%] flex flex-col items-center justify-center gap-y-8 rounded-r-[15px]">
            
            {/* HomePage Navigation button */}
            <div
              className="absolute top-6 left-6 flex gap-3 btn btn-ghost btn-circle tooltip tooltip-bottom"
              data-tip="صفحه اصلی"
            >
              <Link type="button" to="/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="var(--text-col3)"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            {/* HomePage Navigation button */}
            
            <h2 className="w-[80%] text-3xl text-start">فراموشی رمز</h2>
            <div className="w-[100%] flex flex-col justify-center items-center gap-4">
              <Formik
                initialValues={{ email: "" }}
                onSubmit={(values) => ForgetPassword(values)}
                validationSchema={validation}
              >
                <Form className="w-[80%] flex flex-col justify-center gap-12">
                  <span className="relative">
                    <Field
                      type="email"
                      name="email"
                      placeholder="ایمیل خود را وارد کنید"
                      style={{
                        background: "var(--background)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />

                    {/* email field icon */}
                    <span
                      id="fieldsIcon"
                      className="bg-none absolute top-[15px] right-[13px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="var(--text-col3)"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </span>

                    <ErrorMessage
                      name="email"
                      component={"p"}
                      className="validation"
                    />
                  </span>

                  <ButtonDarkGreenTall name={"ورود"} className="!w-[100%]" />
                </Form>
              </Formik>
              <ButtonHomeBack
                name={"بازگشت به صفحه قبل"}
                sendMeTo={-1}
                className="!w-[80%]"
              />
            </div>
          </div>

          {/* left side: picture */}

          <div
            style={{ backgroundColor: "var(--main-col2)" }}
            className="hidden w-[50%] h-[100%] md:flex flex-col items-center justify-center gap-y-11 rounded-tl-2xl rounded-bl-2xl"
          >
            <div className="w-[75%] h-[75%] mb-9">
              <img src={signin} className="w-full h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export { Forget };
