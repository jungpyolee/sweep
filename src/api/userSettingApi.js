import axios from "axios";

const api = axios.create({ baseURL: "http://3.37.194.249/userSetting" });

export const updateNickname = (body) => api.put("/nickname", body);

export const updateTeamId = (body) => api.put("/teamId", body);
