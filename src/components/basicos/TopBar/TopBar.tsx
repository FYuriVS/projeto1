import React from "react";
import "./TopBar.css";
import { SearchBar } from "../SearchBar/SearchBar";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="logo"></div>
      <div className="searchBar" style={{ margin: 20 }}>
        <SearchBar />
      </div>
    </div>
  );
};

export default TopBar;
