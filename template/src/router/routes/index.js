import { Route } from "react-router-dom";
import HomePage from "./HomePage";

export default [
  {
    type: Route,
    path: ["/"],
    component: HomePage,
    state: "homePage",
    exact: true,
  },
  {
    type: Route,
    path: ["/second"],
    component: HomePage,
    state: "homePage",
    exact: true,
  },
  {
    type: Route,
    component: HomePage,
    state: "pageNotFound",
    exact: true,
  },
];
