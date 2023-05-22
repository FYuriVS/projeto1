import React, { useState } from "react";
import "./Login.css";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import Divider from "../Divider/Divider";

export const Login = (props: any) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");

  return (
    <div className="container-login">
      <br />
      <label>Username</label>
      <InputText onChange={(e) => setUsernameValue(e.target.value)} />
      <br />
      <label>Password</label>
      <Password
        className="pass"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        feedback={false}
      />
      <br />
      <Button size="large" label="Sign in" />
      <Divider />
    </div>
  );
};
