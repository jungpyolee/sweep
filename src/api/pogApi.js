import axios from "axios";

const api = axios.create({ baseURL: "http://3.37.194.249/pog" });

export const getPOGList = () => api.get("/list").then((res) => res.data);

export const getPOGResult = () => api.get("/result").then((res) => res.data);

export const votePOG = (body) => api.post("/vote", body);
