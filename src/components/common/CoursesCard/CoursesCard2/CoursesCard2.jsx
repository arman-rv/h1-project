import picture from "../../../../assets/image/03.jpg";
import { ButtonLightGreen } from "../../ButtonLightGreen/ButtonLightGreen";

const CoursesCard2 = ({
  title,
  desc,
  cost,
  statusName,
  levelName,
  likeCount,
  teacherName,
  courseRate,
  pic,
  id,
}) => {
  return (
    <div
      style={{ background: "var(--background)" }}
      className="rounded-xl  w-full flex flex-col"
    >
      <div
        style={{ background: "var(--back-col)" }}
        className="rounded-xl flex shadow-cardShadow "
      >
        <div className="w-[30%] overflow-hidden rounded-[0_10px_10px_0]">
          <img className="object-cover h-full" src={picture} />
        </div>
        <div className="w-[70%] flex flex-col justify-center m-[3%] gap-2">
          <h3 className="text-3xl font-semibold text-textCol5"> {title}</h3>
          <span
            style={{ color: "var(--text-col4)" }}
            className="text-lg font-bold"
          >
            <span> مدرس: </span>
            <span> {teacherName} </span>
          </span>
          <div className="flex justify-between pl-5  ">
            {/* badge */}
            <span
              style={{
                background: "var(--main-col3)",
                color: "var(--text-col3)",
              }}
              className=" py-1 px-2.5 border-none rounded text-sm font-medium"
            >
              {statusName}
            </span>
            {/* badge */}

            {/* like */}
            <span className="flex flex-row-reverse gap-2 ">
              <span className="pt-1">{likeCount}</span>
              <span
                className="cursor-pointer tooltip tooltip-top "
                data-tip="پسندیدن "
              >
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
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </span>

              <span
                className="cursor-pointer tooltip tooltip-top"
                data-tip="علاقه مندی ها"
              >
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
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </span>

            {/* like */}
          </div>

          <p
            style={{ color: "var(--secondary)" }}
            className=" line-clamp-1 text-[14px] text-justify font-light flex items-center "
          >
            {desc}
          </p>
          <span className="flex justify-between mt-[10px]">
            <span className="text-lg">
              <span style={{ color: "var(--text-col4)" }}> مبلغ: </span>
              <span
                style={{ color: "var(--price)" }}
                className="font-medium text-xl"
              >
                {cost}
              </span>
              <span style={{ color: "var(--text-col4)" }}> تومان</span>
            </span>
            <span className="">
              <ButtonLightGreen
                name="الان ثبت نام کن"
                sendMeTo={"/coursedetail/" + id}
                className='my-0'
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export { CoursesCard2 };
