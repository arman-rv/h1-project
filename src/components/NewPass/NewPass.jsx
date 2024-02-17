import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ref } from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ButtonDarkGreenTall } from "../common/ButtonDarkGreen/ButtonDarkGreenTall";
import { getConfigValue, resetPasswordAPI } from "../../core/services/api/resetpass";

import sign from "../../assets/image/newPass.svg";
import { motion } from 'framer-motion';
import { variants } from "../Landing/Teachers/varient";


const NewPass = () => {
  const [resetValue, setResetValue] = useState([]);

  const navigate = useNavigate();

  const getCharacterValidationError = (str) => {
    return `رمز عبور شما باید دارای حداقل یک ${str}`;
  };
  const validation = yup.object().shape({
    pass: yup
      .string()
      .required("این فیلد اجباریست")
      // check minimum characters
      .min(8, "رمز عبور باید دارای حداقل 8 کارکتر انگلیسی باشد")
      // different error messages for different requirements
      .matches(/[0-9]/, getCharacterValidationError("عدد"))
      .matches(/[a-z]/, getCharacterValidationError("حرف کوچک انگلیسی"))
      .matches(/[A-Z]/, getCharacterValidationError("حرف بزرگ انگلیسی")),
    confirmPass: yup
      .string()
      .required("این فیلد اجباریست")
      // use oneOf to match one of the values inside the array.
      // use "ref" to get the value of passwrod.
      .oneOf([ref("pass")], "رمز عبور همخوانی ندارد"),
  });

  const params = useParams();
  const ConfigVal = params.ConfigValue;
  //console.log(ConfigVal);

  const getConfigVal = async () => {
    const ConfigValue = await getConfigValue(ConfigVal);
    setResetValue(ConfigValue);
    //console.log(ConfigValue);
  };

  useEffect(() => {
    getConfigVal();
  }, []);

  const handleResetPass = async (values) => {
    const configInfo = {
      userId: resetValue.id,
      newPassword: values.pass,
      resetValue: resetValue.message,
    };
    //console.log(configInfo);

    const user = await resetPasswordAPI(configInfo);
    //console.log(user);

    navigate("/login");
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
            
            <h2 className="text-3xl">ثبت نام</h2>

            <div className="w-[100%] flex flex-col justify-center items-center gap-4">
              <Formik
                initialValues={{ pass: "", confirmPass: "" }}
                onSubmit={(values) => handleResetPass(values)}
                validationSchema={validation}
              >
                <Form className="w-[80%] flex flex-col justify-center gap-6">

                  {/* password field */}
                  <span className="relative">
                    <Field
                      name="pass"
                      placeholder="رمز عبور"
                      style={{
                        background: "var(--background)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />

                    {/* password field icon */}
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
                          strokeLinejoin="round"
                          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                        />
                      </svg>
                    </span>

                    <ErrorMessage
                      name="pass"
                      component={"p"}
                      className="validation"
                    />
                  </span>

                  {/* confirm password field */}
                  <span className="relative">
                    <Field
                      name="confirmPass"
                      placeholder="تکرار رمز عبور"
                      style={{
                        background: "var(--background)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />

                    {/* confirm password field icon */}
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
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </span>

                    <ErrorMessage
                      name="confirmPass"
                      component={"p"}
                      className="validation"
                    />
                  </span>
                 
                  <ButtonDarkGreenTall name={"ثبت"} className="!w-[100%]" />
                </Form>
              </Formik>
            </div>
          </div>

          {/* left side: picture */}

          <div
            style={{ backgroundColor: "var(--main-col2)" }}
            className="hidden w-[50%] h-[100%] md:flex flex-col items-center justify-center gap-y-11 rounded-tl-2xl rounded-bl-2xl"
          >
            <div className="w-[75%] h-[75%] mb-9">
            <img src={sign} className="w-full h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export { NewPass };
