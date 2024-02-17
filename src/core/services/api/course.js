import http from "../interceptor";

export const getallbypgCourseList = async (
  sort,
  search,
  cat,
  type,
  level,
  costDown,
  costUp,
  page
) => {
  try {
    // console.log("cc",costL,costR);

    //console.log("Fetching started...");

    const queryParams = [];
    if (page) queryParams.push(`PageNumber=${page}`);
    if (search) queryParams.push(`Query=${search}`);
    if (level) queryParams.push(`courseLevelId=${level}`);
    if (sort) queryParams.push(`SortingCol=${sort}`);
    if(cat.length){if (cat) {
      queryParams.push(`ListTech=${cat}`);
      queryParams.push(`TechCount=1`);
    }}
    
    if (type) queryParams.push(`CourseTypeId=${type}`);
    if (costUp) {
      queryParams.push(`CostUp=${costUp}`);
      if (!costDown) queryParams.push(`CostDown=0`);
    }
    if (costDown) queryParams.push(`CostDown=${costDown}`);

    const url = `/Home/GetCoursesWithPagination?RowsOfPage=12&${queryParams.join("&")}`;
    // console.log("tt",{ url });

    // const result = await http.get(`/Home/GetCoursesWithPagination?Query=${search}&TechCount=1&courseLevelId=${level}&SortingCol=${sort}&ListTech=${cat}&CourseTypeId=${type}`);
    const result = await http.get(url);
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getallbypgCourseListt = async (search) => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/Home/GetCoursesWithPagination?Query=${search}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getCat = async () => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/Home/GetTechnologies`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getCourseType = async () => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/CourseType/GetCourseTypes`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getCourseLevel = async () => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/CourseLevel/GetAllCourseLevel`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getCourseById = async (id) => {
  //console.log(id);
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getCommentById = async (id) => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/Course/GetCourseCommnets/${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getRepCommentById = async (a,b) => {

  try {
    //console.log("Fetching started...");

    const result = await http.get(`/Course/GetCourseReplyCommnets/${a}/${b}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const addReserve = async (id) => {
  try {
    //console.log("Fetching started...");
    const objj={courseId:id}
    const result = await http.post("/CourseReserve/ReserveAdd", objj);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const reserved = async () => {
  try {
    //console.log("Fetching started...");
    const result = await http.get("/SharePanel/GetMyCoursesReserve");
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const liked = async (id) => {
  try {
    console.log("Fetching started...");
    const result = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const deletliked = async (data) => {
  try {
    console.log("Fetching started...");
    const result = await http.delete(`/Course/DeleteCourseLike`, {data:data});
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const topCourse = async () => {
  try {
    //console.log("Fetching started...");
    const result = await http.get(`Home/GetCoursesTop?Count=5`);
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const favorite = async (a) => {
  try {
    console.log("Fetching started...");
    const result = await http.post(`/Course/AddCourseFavorite`, a);
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const addcomment = async (data) => {
  try {
    //console.log("Fetching started...");
    const result = await http.post("/Course/AddCommentCourse", data);
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const repcomment = async (rc) => {
  try {
    console.log("Fetching started...");
    const result = await http.post("/Course/AddReplyCourseComment", rc);
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
