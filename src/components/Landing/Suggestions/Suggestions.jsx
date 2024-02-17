import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import envelope from "../../../assets/image/envelope.svg";
import { ButtonLightGreen } from "../../common/ButtonLightGreen/ButtonLightGreen";
import { ContactInputBox, ContactTextArea } from "../../ContactUs/ContactUs";

const Suggestions = () => {


  return (
    <>
    <div className="mx-auto my-[40px] py-[20px] flex flex-col items-center">
      <h3 className="text-[32px]">پیشنهادات و انتقادات</h3>
      <p  style={{color:'var(--text-col4)'}}>نظرات خود را با ما درمیان بگذارید</p>

      <div className="lg:container lg:mx-auto w-[100%] mt-[30px] flex flex-row justify-center">
        <div id="rightBox" className="basis-full md:basis-3/5 mt-[30px]">
          <Formik initialValues="" onSubmit="" validationSchema="">
            <Form style={{color:'var(--text-col4)'}} className="flex flex-col items-center gap-4">
            <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="نام و نام خانوادگی"
                    className="!w-[70%] !mb-0"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="ایمیل"
                    className="!w-[70%] !mb-0"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="شماره تماس"
                    className="!w-[70%] !mb-0"
                  />
               <ContactTextArea
               row="6"
               placeholder="متن..."
               name='text'
               defaultValue=""
               className="!w-[70%] !mb-0"
               />
              <div className="w-[70%] flex justify-start">
                <ButtonLightGreen name='ارسال' />
              </div>
              
            </Form>
          </Formik>
        </div>
        <div id="leftBox" className="md:basis-2/5 hidden md:flex flex-col items-start justify-center">
          <img src={envelope} alt="" className="w-[80%]" />
        </div>
      </div>
    </div>
    </>
  );
};

export { Suggestions };
