import { useState } from "react";
import { CommentsDe } from "./CommentsDe";
import { useEffect } from "react";
import { getRepCommentById } from "../../core/services/api/course";
import { BoxComment } from "./BoxComment";
import { RepBoxComment } from "./RepBoxComment";

const Comments = ({
  user,
  dec,
  like,
  dislike,
  insert,
  pic,
  id,
  reply,
  courseId,
}) => {
  const [repCom, setRepCom] = useState([]);
  const [cmntId, setCmntId] = useState([]);

  const getRepCom = async (a, b) => {
    console.log("jj",a,b);
    try {
      const repcoments = await getRepCommentById(a, b);

      setRepCom(repcoments);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  // useEffect(() => {
  //   // getRepCom();
  // }, [repCom]);

  return (
    <div
      style={{ backgroundColor: "var(--back-col)", color: "var(--text-col4)" }}
      className="w-[85%]   mx-auto bg-white py-3 rounded-lg mt-4"
    >
      <CommentsDe
        user={user}
        dec={dec}
        like={like}
        dislike={dislike}
        insert={insert}
        pic={pic}
        id={id}
        reply={reply}
        courseId={courseId}
      />
      <div >
        <label className="cursor-pointer float-left ml-3" htmlFor={id}>
          پاسخ دادن
        </label>

        {reply ? (
          <div className="flex flex-row-reverse mt-8">
            <input
              onClick={() => {
                getRepCom(courseId, id);
              }}
              type="checkbox"
              id='reply'
              className="peer hidden"
            />
            <label className="cursor-pointer ml-4 h-6" htmlFor='reply'>
              پاسخ ها
            </label>
            <div className="bg-white h-0  w-[80%] mx-auto  peer-checked:h-auto overflow-hidden  rounded-lg duration-500 ">
              {repCom.map((recm, index) => {
                return (
                  <div className="py-5">
                     <CommentsDe
                    key={index}
                    dec={recm.describe}
                    user={recm.author}
                    like={recm.likeCount}
                    dislike={recm.disslikeCount}
                    insert={recm.insertDate}
                    pic={recm.pictureAddress}
                    id={recm.id}
                    reply={recm.acceptReplysCount}
                    courseId={recm.courseId}
                  />
                  </div>
                 
                );
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}

      </div>      
      <input onClick={()=>{setCmntId(id);}} id={id} type="checkbox" className="peer hidden"/>
      <div className=" h-0 peer-checked:h-[360px] mt-8 overflow-hidden">
        <RepBoxComment cmntId={cmntId}/>
      </div>
    </div>
  );
};

export { Comments };
