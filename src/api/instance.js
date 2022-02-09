import axios from "axios";
// const baseURL = process.env.REACT_APP_BASE_URL;
const baseURL = "http://65.1.35.119:4041/";

const parsedLogin = JSON?.parse(localStorage.getItem("loginUser"));

const instance = axios.create({
  baseURL,
  headers: {
    "x-access-token": parsedLogin,
  },
});
export default instance;
