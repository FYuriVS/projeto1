import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { SideBar } from "./components/basicos/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
