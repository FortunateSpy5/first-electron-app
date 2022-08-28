import React from "react";
import Titlebar from "./components/Titlebar";
import Sidebar from "./components/Sidebar";
import "../scss/app.scss";

const App = () => {
  return (
    <div className="main">
      <Titlebar className="titlebar"></Titlebar>
      <div className="main-container">
        <Sidebar className="sidebar"></Sidebar>
      </div>
    </div>
  );
};

export default App;
