import axios from "axios";
import { setToken, getDatawithTokenCheck } from "./token";
const api = axios.create({ baseURL: "http://3.37.194.249/info" });

export const getMonthSchedule = (month) =>
  api.get(`/schedule?month=${month}&year=2021`).then((res) => res.data);
export const getTeamRank = () => api.get("/teamRank").then((res) => res.data);
export const getPOGRank = () => api.get("/pogRank").then((res) => res.data);
export const getTeamInfo = () => api.get("/teamInfo").then((res) => res.data);
export const getCurrentGame = () => api.get("/currentGame");
export const getGameResultById = (gameId) =>
  api.get(`/gamaResult?gameId=${gameId}`);
