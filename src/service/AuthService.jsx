import axios from "axios";

const AUTH_REST_API = 'http://localhost:8080/api/auth';
export const registerApiCall = (register) => {
    return axios.post(AUTH_REST_API+'/register',register);
}