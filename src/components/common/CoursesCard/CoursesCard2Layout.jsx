import { CoursesCard2 } from "./CoursesCard2/CoursesCard2"

const CoursesCard2Layout = (p) => {
    return (
        <div className="  mb-[50px] flex flex-col justify-start gap-7 ">
      {p.courseList.map((item, index) => {
        return (
          <CoursesCard2
            key={index}
            title={item.title}
            desc={item.describe}
            cost={item.cost}
            statusName={item.statusName}
            levelName={item.levelName}
            likeCount={item.likeCount}
            teacherName={item.teacherName}
            courseRate={item.courseRate}
            pic={item.tumbImageAddress}
          />
        );
      })}

        </div>      
        )
    }
    
    export {CoursesCard2Layout}