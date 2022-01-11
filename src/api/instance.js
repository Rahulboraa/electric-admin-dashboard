import axios from "axios";

const instance = axios.create({
  baseURL: "http://be-electricone-v2.antino.ca",
});
export default instance;
