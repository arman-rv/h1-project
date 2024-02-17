import http from "../interceptor";

export const getCourseList = async (count) => {
  try {
    //console.log("Fetching started...");
    const result = await http.get(`/Home/GetCoursesTop?Count=${count}`);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getfave = async () => {
  try {
    //console.log("Fetching started...");
    const result = await http.get(`/SharePanel/GetMyFavoriteCourses`);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deletFavorite = async (data) => {
      //console.log("ff",data);

  try {
    //console.log("Fetching started...");
    const result = await http.delete(`/Course/DeleteCourseFavorite`, {data});
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deletReserve = async (data) => {

try {
const result = await http.delete(`/CourseReserve`, {data:data});
return result;
} catch (error) {
console.log(error);
return [];
}
};

export const changePass = async (user) => {
  try {
    const response = await http.post("/SharePanel/ChangePassword", user);

    return response;
  } catch (error) {
    return false;
  }
};
