import React from "react";
import { DashboardProvider } from "./context/DashboardContext";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";

import "./styles.css";

function App() {
  return (
    <DashboardProvider>
      <div className="App">
        <Search />
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;
