import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/auth" });
// "http://3.37.194.249/auth" });

export const signIn = (body) =>
  api.post("/login", body).then((res) => {
    // localStorage.setItem("accesstoken", res.headers.accesstoken);
    console.log(res);
    return res;
  });

export const signUp = (body) =>
  api.post("/signup", body).then((res) => res.data);

export const signOut = () => api.delete("/signout");

export const read = () => api.get("/read");
