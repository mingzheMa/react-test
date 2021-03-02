import Not from "@/pages/404";

import front from "./modules/front";
import admin from "./modules/admin";

export default [
  ...admin,
  ...front,
  {
    path: "*",
    key: "not",
    component: Not
  }
];
