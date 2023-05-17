import React from "react";
import "./Container.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { CardCarousel } from "../../dinamicos/Card-Carousel/CardCarousel";

export function Container() {
  return (
    <div className="container">
      <div className="topBar">
        <div className="logo"></div>
        <div style={{ margin: 20 }}>
          <SearchBar />
        </div>
      </div>

      <div className="ofers">
        <CardCarousel />
        <CardCarousel />
      </div>
    </div>
  );
}
