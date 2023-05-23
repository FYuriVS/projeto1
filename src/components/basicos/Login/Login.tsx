import React, { useState } from "react";
import "./Login.css";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import Divider from "../Divider/Divider";
import { log } from "console";

export const Login = (props: any) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");

  return (
    <div className="container-login">
      <br />
      <label>Email</label>
      <InputText
        className="username"
        onChange={(e) => setUsernameValue(e.target.value)}
      />
      <br />

      <label>Password</label>
      <Password
        className="pass"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        feedback={false}
      />

      <div className="forgot-password">
        <a href="#">forgot password</a>
      </div>
      <Button size="large" label="Sign in" onClick={() => console.log("opa")} />
      <Divider />
      <div className="options-login">
        <p className="login-options-title">Or login with</p>
        <div className="options">
          <div className="option">
            <i
              className="pi pi-google"
              style={{ fontSize: "1rem", color: "#E84646" }}
            ></i>
          </div>
          <div className="option">
            <i
              className="pi pi-facebook"
              style={{ fontSize: "1rem", color: "#1877F2" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
