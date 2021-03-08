import React from "react";
import { Redirect } from "react-router-dom";

import Admin from "@/layout/Admin";
import Product from "@/pages/Admin/Product";
import User from "@/pages/Admin/User";
import Not from "@/pages/404";

export default [
  {
    path: "/admin",
    key: "admin",
    component: Admin,
    routes: [
      {
        path: "/admin/product",
        key: "admin-product",
        exact: true,
        component: Product
      },
      {
        path: "/admin/user",
        key: "admin-user",
        exact: true,
        component: User
      },
      {
        path: "/admin",
        exact: true,
        render: () => <Redirect to={"/admin/product"}></Redirect>
      },

      {
        key: "not",
        component: Not
      }
    ]
  }
];
