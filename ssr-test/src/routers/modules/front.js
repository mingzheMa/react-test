import Front from "@/layout/Front";
import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import Login from "@/pages/Login";
import Not from "@/pages/404";

export default [
  {
    path: "/",
    key: "front",
    component: Front,
    routes: [
      {
        path: "/movies",
        key: "movies",
        exact: true,
        component: Movies
      },
      {
        path: "/login",
        key: "login",
        exact: true,
        component: Login
      },
      {
        path: "/",
        key: "home",
        exact: true,
        component: Home
      },

      {
        key: "not",
        component: Not
      }
    ]
  }
];
