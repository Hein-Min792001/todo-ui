import axios from "axios";

const AUTH_REST_API = "http://localhost:8080/api/auth";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const registerApiCall = (register) => {
  return axios.post(AUTH_REST_API + "/register", register);
};
export const loginApiCall = (usernameOrEmail, password) =>
  axios.post(AUTH_REST_API + "/login", { usernameOrEmail, password });
export const storeToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");