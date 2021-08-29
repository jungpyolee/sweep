import axios from "axios";

const api = axios.create({ baseURL: "http://3.37.194.249/tinder" });

export const createTinder = (body) => api.post("/create", body);

export const getHistory = () => api.get("/history");

export const createReport = (body) => api.post("/report", body);

export const updateLike = (body) => api.put("/react", body);

export const getHOF = () => api.get("/hof");

export const getTinder = (count, filter) =>
  api.get(`/tinder?count=${count}&filter=${filter}`);

export const getTopTinder = (gameId) => api.get(`/toptinder?gameId=${gameId}`);
