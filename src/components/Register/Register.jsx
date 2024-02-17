import sign from "../../assets/image/register.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "./../../core/services/api/register";
import * as yup from "yup";

import { ButtonDarkGreenTall } from "../common/ButtonDarkGreen/ButtonDarkGreenTall";
import { setItem } from "../../core/services/common/storage.services";
import { motion } from 'framer-motion';
import { variants } from "../Landing/Teachers/varient";

const Register = () => {
  const phoneRegExp = /((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}/g;
  const validation = yup.object().shape({
    phoneNum: yup.string().required("این فیلد اجباریست").matches(phoneRegExp, 'شماره وارد شده صحیح نیست').length(11,'لطفا شماره موبایل را در قالب 11 رقمی وارد کنید'),
  });

  const navigate = useNavigate();

  const registerUser = async (values) => {
    const userPhoneNum = {
      phoneNumber: values.phoneNum,
    };
    //console.log(userPhoneNum);

    const user = await registerAPI(userPhoneNum);
    //console.log(user);

    setItem('phoneNumber', userPhoneNum.phoneNumber)

    //console.log(setItem);

    navigate("/registerVerify");
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
            
            <h2 className="text-3xl mb-8">ثبت نام</h2>

            <div className="w-[100%] flex flex-col justify-center items-center gap-4">
              <Formik
                initialValues={{ phoneNum: "" }}
                onSubmit={(values) => registerUser(values)}
                validationSchema={validation}
              >
                <Form className="w-[80%] flex flex-col justify-center gap-14">
                  <span className="relative">
                    <Field
                      name="phoneNum"
                      placeholder="شماره همراه"
                      style={{
                        background: "var(--background)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className='relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3'
                    />

                    {/* phoneNumber field icon */}
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </span>

                    <ErrorMessage
                      name="phoneNum"
                      component={"p"}
                      className="validation"
                    />
                  </span>
                  <ButtonDarkGreenTall name={"ادامه"} className="!w-[100%]" />
                </Form>
              </Formik>
            </div>

            <div className="flex flex-row md:flex-col lg:flex-row w-[80%] gap-6 justify-between items-center">
              <Link
                to="/login"
                style={{ color: "var(--text-col4)" }}
                className="underline"
              >
                من از قبل عضو هستم
              </Link>
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

export { Register };
