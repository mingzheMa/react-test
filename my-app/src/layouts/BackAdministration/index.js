import React from "react";
import "./index.css";
import Pt from "prop-types";
import Header from "./header";
import Side from "./side";

export default function BackAdministration(props) {
  return (
    <div className="layout">
      <div className="side">{props.side || <Side />}</div>
      <div className="inside">
        <div className="header">{props.header || <Header />}</div>
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}

BackAdministration.propTypes = {
  side: Pt.element,
  header: Pt.element,
  content: Pt.element.isRequired
};
