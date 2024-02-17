import { Field, Form, Formik } from "formik";
import * as React from "react";
import { useParams } from "react-router-dom";
import { addcomment, repcomment } from "../../core/services/api/course";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonDarkGreenTall } from "../common/ButtonDarkGreen/ButtonDarkGreenTall";

const RepBoxComment = (c) => {
  const { id } = useParams();
  const [keyys, setKeyys] = useState({ title: "", comm: "" });

  const repCom = async () => {
    const dataa = new FormData();
    const comentListt = {
      CommentId: c.cmntId,
      CourseId: id,
      Title: keyys.title,
      Describe: keyys.comm,
    };

    const keyss = Object.keys(comentListt);

    keyss.forEach((kk) => {
      const itemm = comentListt[kk];
      dataa.append(kk, itemm);
    });
    const coments = await repcomment(dataa);
  };

  useEffect(() => {
    repCom();
  }, [keyys]);
  return (
    <div className=" w-[85%]  mx-auto flex flex-col mt-4">
      <span> </span>
      <Formik initialValues={{ title: "", comm: "" }} onSubmit={setKeyys}>
        <Form className="flex flex-col w-[100%] gap-2">
          <Field 
          style={{
             background: "var(--background)",
             borderColor: "var(--text-col3)",
             borderRadius: 10,
           }}
            name="title" 
            placeholder="عنوان "
             className="relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3" />

          <div className="flex ">
            <Field 
             style={{
              height: 200,
              background: "var(--background)",
              borderColor: "var(--text-col3)",
              borderRadius: 10,
            }}
            as="textarea" name="comm" placeholder="متن "
            className="relative border-b w-[100%] h-[50px] pr-12 shadow-md focus:outline-none focus:ring focus:ring-textCol3" />
            
          </div>
          <ButtonDarkGreenTall name={"پاسخ دادن"}/>
        </Form>
      </Formik>
    </div>
  );
};

export { RepBoxComment };
