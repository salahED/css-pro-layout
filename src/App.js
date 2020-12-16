import React, { useState } from "react";
import "css-pro-layout/dist/css/css-pro-layout.min.css";
import "./styles.css";
import Sidebar from "./sidebar";
import Main from "./main";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [rtl, setRTL] = useState(false);

  return (
    <div className={`layout has-sidebar ${rtl ? "rtl" : ""}`}>
      <Sidebar collapsed={collapsed} toggled={toggled} />
      <Main
        collapsed={collapsed}
        toggled={toggled}
        rtl={rtl}
        setCollapsed={setCollapsed}
        setToggled={setToggled}
        setRTL={setRTL}
      />
    </div>
  );
}
