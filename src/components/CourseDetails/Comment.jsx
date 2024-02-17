import { useEffect, useState } from "react";
import { BoxComment } from "./BoxComment";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";
import { getCommentById } from "../../core/services/api/course";

const Comment = () => {
  const [comment, setComment] = useState([]);
  //console.log(comment)
  const { id } = useParams();

  const getCom = async (id) => {
    try {
      const coments = await getCommentById(id);

      setComment(coments);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getCom(id);
  }, []);

  return (
    <div
      style={{  color: "var(--text-col4)" }}
      className="w-[100%]  mx-auto flex flex-col gap-y-4 pt-5 pb-6"
    >
      <div className="w-[100%] h-[30px]  mx-auto px-[50px]">
        <h2 className="text-3xl">نظرات شما</h2>
      </div>

      {comment.map((cmnt, index) => {
        return (
          <Comments
            key={index}
            user={cmnt.author}
            dec={cmnt.describe}
            like={cmnt.likeCount}
            dislike={cmnt.disslikeCount}
            insert={cmnt.insertDate}
            pic={cmnt.pictureAddress}
            id={cmnt.id}
            reply={cmnt.acceptReplysCount}
            courseId={cmnt.courseId}
          />
        );
      })}

      
      <div className="flex justify-end w-[93%] ">

        <button className="w-[95px] h-[25px]  my-3">مشاهده بیشتر</button>
      </div>
      <div className="flex justify-center">
        <BoxComment />
      </div>
    </div>
  );
};

export { Comment };
