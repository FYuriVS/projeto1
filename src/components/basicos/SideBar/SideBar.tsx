import React, { useEffect, useState } from "react";
import "./SideBar.css";

import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";

import { Sidebar } from "primereact/sidebar";

export function SideBar() {
  const [visibleLeft, setVisibleLeft] = useState(false);

  const navigate: any = useNavigate();

  return (
    <div className="container-side">
      <div className="side-bar">
        <div className="actions">
          <div className="category">
            <Button
              size="large"
              icon="pi pi-align-justify"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                padding: ".4rem 0",
              }}
              onClick={() => setVisibleLeft(true)}
            />
          </div>
          <div className="action"></div>
          <div className="action"></div>
          <div className="action"></div>
          <div className="cart" onClick={() => navigate("/cart")}>
            <Button
              size="large"
              icon="pi pi-shopping-cart"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                padding: ".4rem 0",
              }}
            />
          </div>
          <div className="action"></div>
        </div>
        <div className="profile"></div>
      </div>
      <Sidebar
        visible={visibleLeft}
        position="left"
        onHide={() => setVisibleLeft(false)}
      >
        <h2>Categoryes</h2>
        <div className="categoryes">
          <div className="category-l">categoria teste 1</div>
          <div className="category-l">categoria teste 1</div>
          <div className="category-l">categoria teste 1</div>
          <div className="category-l">categoria teste 1</div>
        </div>
      </Sidebar>
    </div>
  );
}
