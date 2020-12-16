import React from "react";
import "css-pro-layout/dist/css/css-pro-layout.min.css";
import "./styles.css";

export default function Sidebar(props) {
  return (
    <aside
      id="sidebar"
      className={`sidebar break-point-md ${
        props.collapsed ? "collapsed" : ""
      } ${props.toggled ? "toggled" : ""}`}
    >
      Sidebare
    </aside>
  );
}
