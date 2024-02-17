import React, { useEffect, useState } from "react";

import image from "../../assets/image/coursesDetails.svg";
import { ButtonDarkGreen } from "../common/ButtonDarkGreen/ButtonDarkGreen";
import { PapersSlideshow } from "../Landing/Papers/PapersSlideshow/PapersSlideshow";
import { ScrollRestoration, useParams } from 'react-router-dom';
import { getCommentById, getPaperCaById } from "../../core/services/api/paper";
import { Comments } from "../CourseDetails/Comments";
import { Comment } from "../CourseDetails/Comment";

const PaperDetails = () => {
  const {id}=useParams();
  const [paperr,setPaperr]=useState([]);
  const [comment,setComment]=useState();

  // console.log("yyy",comment);
  
  const getpap = async (id) => {

    try {
      const courses = await getPaperCaById(id);

      setPaperr(courses.detailsNewsDto);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  const getCom = async (id) => {

    try {
      const courses = await getCommentById(id);

      setComment(courses);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  useEffect(() => {
    getpap(id);
    getCom(id);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          style={{ backgroundColor: "var(--back-col)" }}
          className="w-[85%] rounded-[30px] mt-[50px] py-[50px] px-[22px] relative pt-[80px] shadow-cardShadow"
        >
          <img src={image} alt="" className="w-[60%] mx-auto" />
          <div className="px-[50px]">
            <h3 className="mt-10 text-3xl"> {paperr&& paperr.title} </h3>
         

            <p
              style={{ color: "var(--text-col4)" }}
              className="w-[100%] my-[20px] indent-[30px] text-lg text-justify"
            >
              {paperr&& paperr.describe}
            </p>
            <div>
            {comment&& comment.map((cmnt, index) => {
        return (
          <Comments
            key={index}
            user={cmnt.autor}
            dec={cmnt.describe}
            like={cmnt.likeCount}
            dislike={cmnt.dissLikeCount}
            insert={cmnt.inserDate}
            pic={cmnt.pictureAddress}
            id={cmnt.id}
            reply={cmnt.replyCount}
            courseId={cmnt.newsId}
          />
        );
      })}
      
    <Comment/>
            </div>
            
          </div>
        </div>

        <div className="w-screen mx-auto my-[50px] py-[40px] flex flex-col items-center">
          <h3 className="text-[32px]">مقالات مرتبط</h3>
          <p style={{ color: "var(--text-col4)" }}>
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </p>
          <div className="w-[90%] my-[20px] flex justify-center">
            <PapersSlideshow />
          </div>
          <ButtonDarkGreen name="مشاهده مقالات بیشتر" sendMeTo='/paperlist' />
        </div>
      </div>

      <ScrollRestoration/>
    </>
  );
};

export { PaperDetails };
