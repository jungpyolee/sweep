import HomePage from "../pages/home";
import LeaguePage from "../pages/league";
import HistoryPage from "../pages/history";
import SignInPage from "../pages/login/signIn";
import NicknameSelectPage from "../pages/login/nicknameSelect";
import TeamSelectPage from "../pages/login/teamSelect";

const routes = [
  { path: "/", component: HomePage },
  { path: "/league", component: LeaguePage },
  { path: "/history", component: HistoryPage },
  { path: "/signIn", component: SignInPage },
  { path: "/nicknameSelect", component: NicknameSelectPage },
  { path: "/teamSelect", component: TeamSelectPage },
];

export default routes;
