import axios from "axios";

const api = axios.create({ baseURL: "http://3.37.194.249/auth" });

export const signIn = (uid) =>
  api.post("/login", { id: uid }).then((res) => res.data);

export const signUp = (body) => api.post("/signup", body);

export const signOut = () => api.delete("/signout");

export const read = () => api.get("/read");
