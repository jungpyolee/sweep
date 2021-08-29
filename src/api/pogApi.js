import axios from "axios";

const api = axios.create({ baseURL: "http://3.37.194.249/pog" });

export const getPOGList = () => api.get("/list");

export const getPOGResult = () => api.get("/result");

export const votePOG = (body) => api.post("/vote", body);
