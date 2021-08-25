import HomePage from "../pages/home";
import LeaguePage from "../pages/league";
import HistoryPage from "../pages/history";

const routes = [
  { path: "/", component: HomePage },
  { path: "/league", component: LeaguePage },
  { path: "/history", component: HistoryPage },
];

export default routes;
