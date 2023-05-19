import React, { useEffect, useRef, useState } from "react";
import "./SideBar.css";

import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { TieredMenu } from "primereact/tieredmenu";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

export function SideBar() {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visible, setVisible] = useState(false);
  const style = {
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
    borderColor: "#000",
    outline: "none",
    padding: ".4rem 0",
  };
  const navigate: any = useNavigate();

  // const [isLogged, setIsLogeed] = useState(false);

  const menu: any = useRef(null);
  const items = [
    {
      label: "Login",
      icon: "pi pi-sign-in",
      command: () => {
        setVisible(true);
      },
    },
    {
      label: "Register",
      icon: "pi pi-file-edit",
      command: () => {
        setVisible(true);
      },
    },
    {
      separator: true,
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
      command: () => {},
    },
  ];

  return (
    <div className="test">
      <div className="container-side">
        <div className="side-bar">
          <div className="actions">
            <div className="category">
              <Button
                size="large"
                icon="pi pi-align-justify"
                severity="secondary"
                style={style}
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
                severity="secondary"
                style={style}
              />
            </div>
            <div className="action"></div>
          </div>
          <div className="profile">
            <Button
              size="large"
              icon="pi pi-user"
              severity="secondary"
              rounded
              style={{
                width: "100%",
                backgroundColor: "#fff",
                color: "#000",
                borderColor: "#000",
                outline: "none",
                padding: ".4rem 0",
              }}
              onClick={(e) => menu.current.toggle(e)}
            />
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
          </div>
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
      <div className="mob-menu">
        <Button
          size="large"
          icon="pi pi-align-justify"
          severity="secondary"
          style={style}
          onClick={() => setVisibleLeft(true)}
        />
      </div>

      <Dialog
        header="Login"
        visible={visible}
        style={{ width: "30rem", height: "35rem" }}
        onHide={() => setVisible(false)}
      >
        <div className="container-login">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon ">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
          </div>{" "}
        </div>
      </Dialog>
    </div>
  );
}
