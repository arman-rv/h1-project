import { Link } from "react-router-dom";
import car from "../../../assets/image/03.jpg";
import pro from "../../../assets/image/images.jpg";
import { useState } from "react";
import { deletlikedPaper, likedPaper } from "../../../core/services/api/paper";

const PaperCard = ({papr,setRandd}) => {
const [isLiked,setIsLiked]=useState(papr&&papr.currentUserIsLike);

  
  const likepaper = async (id,del) => {
    // const data = new FormData();
    //console.log("ii",del);
    try {

      if (papr&&papr.currentUserIsLike === false) {
        const lii = await likedPaper(id);
        setRandd(Math.random());
  

      } else if (papr&&papr.currentUserIsLike === true) {
        // data.append("CourseLikeId", id.userLikedId);

        const objDelLike={deleteEntityId:del}

        const liii = await deletlikedPaper(objDelLike);
        setRandd(Math.random());

      }
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  // console.log("pp",papr);
  return (
    <>
      <div
        style={{ backgroundColor: "var(--back-col)" }}
        className="w-[290px] rounded-[20px] flex-col shadow-cardShadow pb-[10px] cursor-pointer"
      >
        <div className="h-[170px] w-[100%] rounded-b-none rounded-[15px] mb-[20px]  max-w-full overflow-hidden">
          <img src={car} className="object-cover w-full h-full" />
        </div>
        <div className="px-[22px]">
        <span className="flex flex-row gap-2 justify-between">
            <span
            style={{ backgroundColor: "var(--main-col3)", color:"var(--text-col3)" }}
            className="py-1 px-2.5 border-none rounded text-sm font-medium">
              {papr&& papr.newsCatregoryName}
            </span>
          <span className="flex flex-row-reverse">
          <span
            className="cursor-pointer tooltip tooltip-top"
            data-tip="پسندیدن "
            onClick={() => {
              likepaper(papr&& papr.id,papr.likeId );
              
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={papr&&papr.currentUserIsLike === true ? "green" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--text-col4)"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
          </span>
        </span>

        </span>
        <div className=" flex flex-row-reverse gap-2 w-[100%] h-4">
        <span className=" w-6 h-[100%] text-xs flex justify-center ">
          {papr&&papr.currentLikeCount}
        </span>
      </div>
          <h2 className="h-[50px] text-lg mb-4">
             {papr&&papr.title}
              </h2>

          <p
            style={{ color: "var(--text-col)" }}
            className="h-[45px] line-clamp-2 my-4 text-[14px] font-light"
          >
              {papr&&papr.miniDescribe}
          </p>
          <div className="flex justify-between">
            <div className="flex ml-[10px]">
              <span className="pt-[3px] mt-1 ml-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--main-col)"
                  className="w-4 h-4"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span
                style={{ color: "var(--secondary)" }}
                className="leading-8 text-[12px] hover:text-textHover ml-1"
              >
                {papr&&papr.currentView}
              </span>
            </div>
            <div className="flex">
              <span className="pt-[3px] mt-1 ml-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--main-col)"
                  className="w-4 h-4"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span
                style={{ color: "var(--secondary)" }}
                className="leading-8 text-[12px] hover:text-textHover ml-1"
              >
               {papr&&papr.updateDate}
              </span>
            </div>
          </div>
          <div
            style={{ borderColor: "var(--text-col)" }}
            className="border-b mb-[7px]"
          ></div>
          <div className="flex flex-row mt-1">
            <div className="flex flex-grow justify-center ">
              <Link
                to={"/paperdetail/"+(papr&&papr.id)}
                style={{ color: "var(--text-col)" }}
                className="mr-2 leading-8 font-medium"
              >
                مشاهده جزئیات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PaperCard };
