const HeaderCourses = ({name ,hiddenHead,hiddenall,hiddenRes, namee ,date}) => {
  return (
    <ul  style={{color:'var(--text-col3)'}} className={`${hiddenHead} text-xs font-bold flex justify-around py-5 text-center text-[14px] me-[10%]`}>
      <li className="w-[30%] mr-[7%]"> نام دوره </li>
      <li className={`${hiddenall}hidden sm:block w-[30%]`}> نام استاد </li>
      <li className={`${hiddenall} w-[10%]`}>  سطح دوره </li>
      <li className={`hidden sm:block w-[20%]`}> تاریخ شروع </li>
      <li className={`${hiddenall}hidden sm:block w-[10%]`}> {name}</li>
    </ul>
  );
};

export { HeaderCourses };
