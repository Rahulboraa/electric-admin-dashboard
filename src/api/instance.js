import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const parsedLogin = JSON?.parse(localStorage.getItem("loginUser"));
// const getToken = JSON?.parse(localStorage.getItem("token"));

const instance = axios.create({
  baseURL,
  headers: {
    "x-access-token": parsedLogin,
  },
});
export default instance;
