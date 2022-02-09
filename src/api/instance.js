import axios from "axios";
// const baseURL = process.env.REACT_APP_BASE_URL;
const baseURL = "https://27b3-2404-1f00-8010-d051-2c40-f946-6903-cadb.ngrok.io";

const parsedLogin = JSON?.parse(localStorage.getItem("loginUser"));

const instance = axios.create({
  baseURL,
  headers: {
    "x-access-token": parsedLogin,
  },
});
export default instance;
