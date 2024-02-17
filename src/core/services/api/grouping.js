import http from "../interceptor";


export const getAllCategories = async () => {
    try {
      //console.log("Fetching started...");
  
      const result = await http.get('/Home/GetTechnologies');
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };