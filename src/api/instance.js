import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
const getToken = JSON.parse(localStorage.getItem("token"));
const parsedLogin = JSON.parse(localStorage.getItem("loginUser"));

const instance = axios.create({
  baseURL,
  headers: {
    "x-access-token": getToken,
  },
});
export default instance;
