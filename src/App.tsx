import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { SideBar } from "./components/basicos/NavBar/NavBar";
import TopBar from "./components/basicos/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <TopBar />

        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
