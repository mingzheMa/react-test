import React from "react";
import { Link } from "react-router-dom";

import indexCss from "./index.css";

export default function index() {
  return (
    <div>
      <Link className={indexCss.link} to="/">
        index
      </Link>
      <Link className={indexCss.link} to="/movies">
        movies
      </Link>
      <Link className={indexCss.link} to="/login">
        login
      </Link>
    </div>
  );
}
