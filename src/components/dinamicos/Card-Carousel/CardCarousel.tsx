import React from "react";
import "./CardCarousel.css";

export function CardCarousel() {
  return (
    <div className="card-carousel">
      <div className="type">
        <h4>Ofertas</h4>
      </div>
      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
}
