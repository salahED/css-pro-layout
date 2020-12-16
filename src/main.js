import React from "react";
import "css-pro-layout/dist/css/css-pro-layout.min.css";
import "./styles.css";
import Navbar from "./navbar";

export default function Main(props) {
  return (
    <>
      <div className="overlay" onClick={() => props.setToggled(false)}></div>
      <div className="layout">
        <Navbar />
        <main className="content">
          <div>
            <a
              href="!#"
              className="btn"
              onClick={() => props.setCollapsed(!props.collapsed)}
            >
              Collapse
            </a>
          </div>
          <div className="sidebar-toggler break-point-md">
            <a
              href="!#"
              className="btn"
              onClick={() => props.setToggled(!props.toggled)}
            >
              Toggle
            </a>
          </div>
          <div>
            <a
              href="!#"
              className="btn"
              onClick={() => props.setRTL(!props.rtl)}
            >
              RTL
            </a>
          </div>
        </main>
        <footer className="footer">Footer</footer>
      </div>
    </>
  );
}
