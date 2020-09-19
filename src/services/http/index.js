import axios from "axios";
// const API_KEY = process.env.REACT_APP;

const http = axios.create({
  baseURL: process.env.REACT_APP,
  transformRequest: [],
});

if (process.env.NODE_ENV === "development") {
  window.http = http;
}

/*
 ** A good practice to set relevant api key
 ** Do delete and set correct (api key)
 ** cuz anyway - exist or no the key will be deleted and changed
*/

http.interceptors.request.use((res) => {
  return res;
});

export { http };
