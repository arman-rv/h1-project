import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { ButtonDarkGreenTall } from "../common/ButtonDarkGreen/ButtonDarkGreenTall";
import { ButtonHomeBack } from "../common/ButtonDarkGreen/ButtonHomeBack";
import { verifyAPI } from "../../core/services/api/register";

import sign from "../../assets/image/registerVerfy.svg";
import { getItem } from "../../core/services/common/storage.services";
import { motion } from 'framer-motion';
import { variants } from "../Landing/Teachers/varient";


const RegisterVerify = () => {
  const validation = yup.object().shape({

      verCode: yup.string().required("این فیلد اجباریست"),
  });

  const navigate = useNavigate();

  const verifyUser = async (values) => {

    const tel = getItem('phoneNumber')
    //console.log(tel);

    const userVerify = {
      phoneNumber: tel,
      verifyCode: values.verCode,
    };
    //console.log(userVerify);

    const user = await verifyAPI(userVerify);
    //console.log(user);

    navigate("/endRegister");
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
           
            <h2 className="w-[80%] text-3xl text-start">ثبت نام</h2>
            <div className="w-[100%] flex flex-col justify-center items-center gap-4">
              <Formik
                initialValues={{ verCode: "" }}
                onSubmit={(values) => verifyUser(values)}
                validationSchema={validation}
              >
                <Form className="w-[80%] flex flex-col justify-center gap-12">
                  <span className="relative">
                    <Field
                      name="verCode"
                      placeholder="کد تایید"
                      style={{
                        background: "var(--background)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />

                    {/* verify field icon */}
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
                          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                        />
                      </svg>
                    </span>
                    
                    <ErrorMessage
                      name="verCode"
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
            <img src={sign} className="w-full h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export { RegisterVerify };
