import React from "react";
import "./index.css";
import Pt from "prop-types";
import Header from "./header";
import Side from "./side";
import { withRouter } from "react-router-dom";

const SideWithRouter = withRouter(Side);
const HeaderWithRouter = withRouter(Header);

export default function BackAdministration(props) {
  return (
    <div className="layout">
      <div className="side">
        <SideWithRouter />
      </div>
      <div className="inside">
        <div className="header">
          <HeaderWithRouter />
        </div>
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}

BackAdministration.propTypes = {
  content: Pt.element.isRequired
};
