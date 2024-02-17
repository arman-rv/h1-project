import http from "../interceptor";

export const loginAPI = async (user) => {
  try {
    const response = await http.post("/Sign/Login", user);

    return response;
  } catch (error) {
    return false;
  }
};

export const loginVerifyAPI = async (user) => {
  try {
    const response = await http.post("Sign/LoginTwoStep?VerifyCode=verify_code", user);

    return response;
  } catch (error) {
    return false;
  }
};