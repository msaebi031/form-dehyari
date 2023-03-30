import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://localhost:3001",
});

// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = process.env.AUTH_TOKEN;

axios.interceptors.response.use(null, (error) => {
  const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;
  if (!expectedErrors) {
    console.log("مشکل در ارتباط با سرور ، لطفا مجددا صفحه رو بارگزاری کنید");
  }

  return Promise.reject(error);
});

export default instance;
