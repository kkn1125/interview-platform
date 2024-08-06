import axios from "axios";

export const requestInterview = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

requestInterview.interceptors.request.use((response) => {
  response.headers.Authorization = localStorage["session"];
  return response;
});
