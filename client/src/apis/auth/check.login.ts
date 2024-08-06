import { requestInterview } from "@src/axios/request.interview";

export const checkLogin = () => requestInterview.post("/auth/check");
