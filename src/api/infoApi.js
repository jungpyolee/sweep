import axios from "axios";

const api = axios.create({ baseURL: "http://3.37.194.249/info" });

export const getMonthSchedule = (month) => api.get(`/schedule?month=${month}`);
export const getTeamRank = () => api.get("/teamRank");
export const getPOGRank = () => api.get("/pogRank");
export const getTeamInfo = () => api.get("/teamInfo").then((res) => res.data);
export const getCurrentGame = () => api.get("/currentGame");
export const getGameResultById = (gameId) =>
  api.get(`/gamaResult?gameId=${gameId}`);
