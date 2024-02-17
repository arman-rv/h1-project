import React from "react";


import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import { ButtonDarkGreenTall } from "../common/ButtonDarkGreen/ButtonDarkGreenTall";
import { ButtonHomeBack } from "../common/ButtonDarkGreen/ButtonHomeBack";

import signin from "../../assets/image/verfy.svg";
import { loginAPI } from "../../core/services/api/auth";
import { useState } from "react";
import { getItem, setItem } from "../../core/services/common/storage.services";
import { variants } from "../Landing/Teachers/varient";
import { motion } from "framer-motion";
import { ErrorAlert } from "../common/Alert/ErrorAlert";
import { toast } from "react-toastify";

const Login = () => {

  const [checkBox, setCheckBox] = useState(false);

  const validation = yup.object().shape({
    user: yup.string().required("این فیلد اجباریست"),
    pass: yup.string().required("این فیلد اجباریست"),
  });

  const navigate = useNavigate();

  const handleCheckBox = (e) => {
    setCheckBox(e.target.checked);
  };

  const loginUser = async (values) => {

    const userLoginInfo = {
      phoneOrGmail: values.user,
      password: values.pass,
      rememberMe: checkBox,
    };
    //console.log(userLoginInfo);

    const user = await loginAPI(userLoginInfo);
    console.log(user);
    

    setItem("token", user.token);
    setItem("phoneOrGmail", userLoginInfo.phoneOrGmail);
    setItem("password", userLoginInfo.password);
    setItem("rememberMe", userLoginInfo.rememberMe);
    setItem("roles", user.roles);
    // console.log(user.roles);

    navigate(getItem("token") ? "/" : none);
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

            <h2 className="w-[80%] text-3xl text-start"> ورود به سیستم</h2>
            <div className="w-[100%] flex flex-col justify-center items-center gap-4">
              <Formik
                initialValues={{ user: "", pass: "" }}
                onSubmit={(values) => loginUser(values)}
                validationSchema={validation}
              >
                <Form className="w-[80%] flex flex-col justify-center gap-6">
                  <span className="relative">
                    <Field
                      name="user"
                      placeholder="شماره همراه"
                      style={{
                        background: "var(--relative)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3"
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
                      name="user"
                      component={"p"}
                      className="validation"
                    />
                  </span>

                  <span className="relative">
                    <Field
                      type="password"
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
                  <div className="w-[100%] flex flex-row gap-2">
                    <input
                      type="checkbox"
                      name="checkBox"
                      onChange={handleCheckBox}
                      className="!focus:outline-none"
                    />
                    <span style={{ color: "var(--text-col4)" }}>
                      مرا به خاطر بسپار
                    </span>
                  </div>
                  <ButtonDarkGreenTall name={"تایید"} className="!w-[100%]" />
                </Form>
              </Formik>
              <ButtonHomeBack
                name={"بازگشت به صفحه اصلی"}
                sendMeTo="/"
                className="!w-[80%]"
              />
            </div>

            <div className="flex flex-row md:flex-col lg:flex-row w-[80%] gap-6 justify-between items-center">
              <Link
                to="/register"
                style={{ color: "var(--text-col4)" }}
                className="text-sm underline"
              >
                یک حساب کاربری ایجاد کنید
              </Link>
              <Link
                to="/login/forget"
                style={{ color: "var(--text-col4)" }}
                className="text-sm underline"
              >
                فراموشی رمز
              </Link>
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

export { Login };
