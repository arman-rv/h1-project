import http from "../interceptor";


export const getallTeachers = async () => {
    try {
      //console.log("Fetching started...");
  
      const result = await http.get('/Home/GetTeachers');
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };