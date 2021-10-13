import axios from "axios";

const Api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

Api.interceptors.response.use(
  (response) => {
    console.log("Success");
    return response;
  },
  (err) => {
    console.log("error");

    return Promise.reject(err);
  }
);

export default Api;
