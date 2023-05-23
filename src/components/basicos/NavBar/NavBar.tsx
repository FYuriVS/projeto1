import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";

import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { TieredMenu } from "primereact/tieredmenu";
import { SplitButton } from "primereact/splitbutton";
import { Dialog } from "primereact/dialog";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";

export function SideBar() {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleRegister, setVisibleRegister] = useState(false);

  let largura = window.innerWidth;
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

  const renderize = () => {
    if (largura < 700) {
      return (
        <div className="profile-mob">
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
      );
    }
    if (largura > 700) {
      return (
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
      );
    }
  };

  // const [isLogged, setIsLogeed] = useState(false);

  const menu: any = useRef(null);
  const items = [
    {
      label: "Login",
      icon: "pi pi-sign-in",
      command: () => {
        setVisibleLogin(true);
      },
    },
    {
      label: "Register",
      icon: "pi pi-file-edit",
      command: () => {
        setVisibleRegister(true);
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
      <div className="container-nav">
        <div className="nav-bar">
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
            {/* {renderize()} */}

            {/* <div className="profile-mob">
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
            </div> */}
            <div className="profile-mob">
              <SplitButton
                onClick={() => setVisibleLogin(true)}
                className="profile-mob-btn"
                label="Login"
                icon="pi pi-user"
                model={items}
              />
            </div>
          </div>
        </Sidebar>
      </div>

      <Dialog
        header="Login"
        visible={visibleLogin}
        style={{ width: "20rem", height: "35rem" }}
        onHide={() => {
          setVisibleLogin(false);
        }}
      >
        <Login />
      </Dialog>
      <Dialog
        header="Register"
        visible={visibleRegister}
        style={{ width: "20rem", height: "35rem" }}
        onHide={() => {
          setVisibleRegister(false);
        }}
      >
        <Register />
      </Dialog>
    </div>
  );
}
