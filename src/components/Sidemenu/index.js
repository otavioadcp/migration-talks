import React, { useState } from "react";
import "./SidemenuStyles.css";

const Sidemenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside className={`App-sidemenu ${!collapsed ? "opened" : ""}`}>
      <button onClick={() => setCollapsed(!collapsed)}>Item 1 </button>
      <button>Item2</button>
    </aside>
  );
};

export default Sidemenu;
