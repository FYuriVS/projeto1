import React from "react";
import "./TopBar.css";
import { SearchBar } from "../SearchBar/SearchBar";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* <div className="menu-mobile"></div> */}
      <div className="logo">a</div>
      <div className="searchBar">
        <SearchBar />
      </div>
    </div>
  );
};

export default TopBar;
