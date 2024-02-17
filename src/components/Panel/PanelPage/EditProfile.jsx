import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Update } from "../../PanelUtilties/UpdatePro/Update";
import { useOutletContext } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { ButtonDarkGreenTall } from "../../common/ButtonDarkGreen/ButtonDarkGreenTall";
import { updateProfile } from "../../../core/services/api/user";

import jpg from "../../../assets/image/jpjp.jpeg";
import { ButtonDarkGreen } from "../../common/ButtonDarkGreen/ButtonDarkGreen";

const EditProfile = () => {
  const validation = yup.object().shape({
    // user: yup.string().required("این فیلد اجباریست"),
    // pass: yup.string().required("این فیلد اجباریست"),
  });
  const [student] = useOutletContext();
  //console.log("st", student);

  const [profile, setProfile] = useState({
    FName: "",
    LName: "",
    NationalCode: "",
    UserAbout: "",
    HomeAdderess: "",
    Gender: true,
    BirthDay: new Date(),
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const profileObj = {
      FName: student.fName,
      LName: student.lName,
      NationalCode: student.nationalCode,
      UserAbout: student.userAbout,
      HomeAdderess: student.homeAdderess,
      Gender: student.gender,
      BirthDay: student.birthDay,
      email: student.email,
      phoneNumber: student.phoneNumber,
    };
    setProfile(profileObj);
  }, [student]);

  // console.log("mammad", profile);

  const updateProfileFunc = async (dataa) => {
    //console.log("data", dataa);
    const data = new FormData();
    // delete data.email
    // delete data.phoneNumber
    const keys = Object.keys(dataa);
    keys.forEach((key) => {
      const item = dataa[key];
      data.append(key, item);
    });
    const user = await updateProfile(data);

    setProfile(dataa);
  };

  return (
    <div className="container-xl">
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div
          style={{ background: "var(--back-col)" }}
          className="w-[100%] lg:w-[30%] flex shadow-cardShadow rounded-md"
        >
          <div className=" w-[100%]">
            <div className="card-header">عکس پروفایل</div>
            <div className="py-8 flex flex-col justify-center items-center text-center">
              <img
                className="object-cover w-[170px] h-[170px] rounded-full mb-4"
                src={jpg}
                alt=""
              />

              <div
                style={{ color: "var(--text-col4)" }}
                className="text-sm mb-4"
              >
                JPG or PNG no larger than 5 MB
              </div>

              <ButtonDarkGreen name="آپلود عکس" />
            </div>
          </div>
        </div>
        <div
          style={{ background: "var(--back-col)" }}
          className="w-[100%] lg:w-[70%] col-xl-8 shadow-cardShadow rounded-md"
        >
          <div className="w-[100%]">
            <div className="card-header">مشخصات کاربر</div>
            <div className="card-body">
              <Formik
                initialValues={profile}
                enableReinitialize
                onSubmit={(values) => updateProfileFunc(values)}
                // validationSchema={validation}
              >
                <Form className="w-[100%] flex flex-row flex-wrap gap-6">
                  <div className="w-[100%] flex flex-col sm:flex-row justify-center gap-6 sm:gap-2">
                    <Field
                      name="FName"
                      placeholder="نام"
                      // value={student.fName}
                      style={{
                        backgroundColor: "var(--text-col5)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="w-[100%] sm:w-[50%] border-b h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />
                    <ErrorMessage
                      name="FName"
                      component={"p"}
                      className="text-red-600 text-sm"
                    />
                    <Field
                      name="LName"
                      placeholder="نام خانوادگی"
                      // value={student.lName}
                      style={{
                        backgroundColor: "var(--text-col5)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="w-[100%] sm:w-[50%] border-b h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />
                    <ErrorMessage
                      name="LName"
                      component={"p"}
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <Field
                    name="phoneNumber"
                    id="Username"
                    placeholder="شماره همراه"
                    // value={student.phoneNumber}
                    disabled
                    style={{
                      backgroundColor: "var(--text-col5)",
                      borderColor: "var(--text-col3)",
                      borderRadius: 10,
                    }}
                    className="border-b w-[100%] h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component={"p"}
                    className="text-red-600 text-sm"
                  />
                  <div className="w-[100%] flex flex-col sm:flex-row justify-center gap-6 sm:gap-2">
                    <Field
                      name="NationalCode"
                      placeholder=" شماره ملی"
                      // value={student.nationalCode}
                      style={{
                        backgroundColor: "var(--text-col5)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="w-[100%] sm:w-[50%] border-b h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />
                    <ErrorMessage
                      name="NationalCode"
                      component={"p"}
                      className="text-red-600 text-sm"
                    />
                    <Field
                      type="date"
                      name="BirthDay"
                      placeholder=" تاریخ تولد"
                      // value={student.birthDay}
                      style={{
                        backgroundColor: "var(--text-col5)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="w-[100%] sm:w-[50%] border-b h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />
                    <ErrorMessage
                      name="BirthDay"
                      component={"p"}
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <Field
                    name="UserAbout"
                    placeholder="  درباره من"
                    // value={student.userAbout}
                    style={{
                      backgroundColor: "var(--text-col5)",
                      borderColor: "var(--text-col3)",
                      borderRadius: 10,
                    }}
                    className="border-b w-[100%] h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                  />
                  <ErrorMessage
                    name="UserAbout"
                    component={"p"}
                    className="text-red-600 text-sm"
                  />
                  <div className="w-[100%] flex flex-col sm:flex-row justify-center gap-6 sm:gap-2">
                    <Field
                      name="email"
                      placeholder=" ایمیل "
                      // value={student.email}
                      disabled
                      style={{
                        backgroundColor: "var(--text-col5)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="w-[100%] sm:w-[70%] border-b h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    />
                    <ErrorMessage
                      name="email"
                      component={"p"}
                      className="text-red-600 text-sm"
                    />
                    <Field
                      as="select"
                      name="Gender"
                      placeholder=" جنسیت "
                      style={{
                        backgroundColor: "var(--text-col5)",
                        borderColor: "var(--text-col3)",
                        borderRadius: 10,
                      }}
                      className="w-[100%] sm:w-[30%] border-b h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                    >
                      <option value="true">مرد</option>
                      <option value="false">زن</option>
                    </Field>
                    <ErrorMessage
                      name="Gender"
                      component={"p"}
                      // value={student.gender}
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <Field
                    name="HomeAdderess"
                    placeholder="  آدرس "
                    // value={student.homeAdderess}
                    style={{
                      backgroundColor: "var(--text-col5)",
                      borderColor: "var(--text-col3)",
                      borderRadius: 10,
                    }}
                    className="border-b w-[100%] h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                  />
                  <ErrorMessage
                    name="HomeAdderess"
                    component={"p"}
                    className="text-red-600 text-sm"
                  />
                  <ButtonDarkGreenTall name={"ثبت تغییرات"} />
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditProfile };
