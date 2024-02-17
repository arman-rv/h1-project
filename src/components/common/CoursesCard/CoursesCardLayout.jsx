import { CoursesCard } from "./CoursesCard/CoursesCard";

const CoursesCardLayout = ({courseList,setRand}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6 ">
      {courseList &&
        courseList.map((item, index) => {
          return (
            <CoursesCard
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
              id={item.courseId}
              userIsLiked={item.userIsLiked}
              userLikedId={item.userLikedId}
              userFavorite={item.userFavorite}
              userFavoriteId={item.userFavoriteId}
              setRand={setRand}
            />
          );
        })}

    </div>
    
  );
};

export { CoursesCardLayout };
