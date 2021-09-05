import axios from "axios";
import { setToken, getDatawithTokenCheck } from "./token";

const api = axios.create({ baseURL: "http://3.37.194.249/auth" });

export const signIn = (body) =>
  api.post("/login", body).then((res) => {
    localStorage.setItem("accesstoken", res.headers.accesstoken);
    localStorage.setItem("refreshtoken", res.headers.refreshtoken);

    console.log(res);
    return res;
  });

export const signUp = (body) =>
  api.post("/signup", body).then((res) => res.data);

export const signOut = () => api.delete("/signout");

export const read = () =>
  api
    .get("/read", { headers: setToken, withCredentials: true })
    .then(getDatawithTokenCheck);
