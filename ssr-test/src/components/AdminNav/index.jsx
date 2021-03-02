import React from "react";
import { Link } from "react-router-dom";

import indexCss from "./index.css";

export default function index() {
  return (
    <div>
      <Link className={indexCss.link} to="/admin/product">
        product
      </Link>
      <Link className={indexCss.link} to="/admin/user">
        user
      </Link>
    </div>
  );
}
