import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

Api.interceptors.response.use(
  (response) => {
    toast.success("Success!");
    toast.info(JSON.stringify(response.data, null, 2), {
      position: "top-left"
    });
    return response;
  },
  (err) => {
    console.log(err);
    toast.error("Error!", {
      position: "bottom-left"
    });

    return Promise.reject(err);
  }
);

export default Api;
