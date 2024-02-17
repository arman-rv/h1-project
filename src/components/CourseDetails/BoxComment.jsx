import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { addcomment, repcomment } from '../../core/services/api/course';
import { useState } from 'react';
import { useEffect } from 'react';
import { ButtonDarkGreenTall } from '../common/ButtonDarkGreen/ButtonDarkGreenTall';

const BoxComment= () => {

  const { id } = useParams();
  const [keyy,setKeyy]=useState(
    {title:"",comm:""}
  );


const addCom = async () => {
  const data=new FormData();
const comentList={
  CourseId:id,
  Title:keyy.title,
  Describe:keyy.comm,
};

 
const keyss=Object.keys(comentList);

keyss.forEach((k)=>{
  const item=comentList[k];
  data.append(k,item);
})
    const coments = await addcomment(data);
};

// const dataa=new FormData();

// const comentListt={
//   CommentId:c.cmntId,
//   CourseId:id,
//   Title:title,
//   Describe:com,
// };
useEffect(()=>{
},[keyy])
  return (
    <div className=' w-[85%] mx-auto'>
      <span> </span>
      <Formik initialValues={{title:"",comm:""}} onSubmit={setKeyy}>
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
          <ButtonDarkGreenTall name={" ثبت کردن"}/>
        </Form>

      </Formik>
    </div>
  );
}

export {BoxComment}