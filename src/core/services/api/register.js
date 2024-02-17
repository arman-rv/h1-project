import { toast } from "react-toastify";
import http from "../interceptor";

export const registerAPI = async (user) => {
  try {
    const response = await http.post("/Sign/SendVerifyMessage", user);
    console.log(response.message)
   return (toast.response.message) 
    
  } catch (error) {
    
    return false;
  }
};

export const verifyAPI = async (user) => {
  try {
    const response = await http.post("/Sign/VerifyMessage", user);

    return response;
  } catch (error) {
    toast.error(`${response.message}`, {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      }); 
    return false;
  }
};

export const endRegisterAPI = async (user) => {
  try {
    const response = await http.post("/Sign/Register", user);

    return response;
  } catch (error) {
    return false;
  }
};