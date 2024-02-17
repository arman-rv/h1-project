import http from "../interceptor";

export const getLandingReport = async () => {

    try {
      //console.log("Fetching started...");
  
      const result = await http.get('/Home/LandingReport');
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };