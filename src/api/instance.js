import axios from "axios";
const base_url = process.env.Base_Url;

const instance = axios.create({
  baseURL: "http://be-electricone-v2.antino.ca",
  // baseURL: base_url,
});
export default instance;
