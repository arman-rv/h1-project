import http from "../interceptor";

export const ForgetPassAPI = async (user) => {
  try {
    const response = await http.post("/Sign/ForgetPassword", user);

    return response;
  } catch (error) {
    return false;
  }
};

export const getConfigValue = async (ConfigValue) => {
    try {
      //console.log("Fetching started...");
      const result = await http.get("Sign/Reset/" + ConfigValue);
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export const resetPasswordAPI = async (user) => {
    try {
      const response = await http.post("/Sign/Reset", user);
  
      return response;
    } catch (error) {
      return false;
    }
  };