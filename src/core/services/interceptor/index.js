import axios from "axios";
import { getItem, removeItem } from "../common/storage.services";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  console.log(response.data)
  
  if(response.data.message === "عملیات با موفقیت انجام شد.") {
    toast.success(response.data.message);}else{
      toast.warning(response.data.message);
    }
  return response.data;
};

const onError = (err) => {
  console.log(err);
  toast.error(response.data.message);
  if(err.response.status === 401) {
    removeItem('token')
    toast.error(response.data.message); 
    window.location.pathname = '/'
}

  if (err.response.status >= 400 && err.response.status < 500) {
    toast.error("Client error: " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = getItem("token");

  if(token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
