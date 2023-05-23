import React, { useState } from "react";
import "./Register.css";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import Divider from "../Divider/Divider";
import { Calendar } from "primereact/calendar";
import { InputMask } from "primereact/inputmask";

export const Register = () => {
  const [firstname, setFisrtNameValue] = useState("");
  const [lastname, setLastNameValue] = useState("");
  const [birthday, setBirthdayValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [phone, setPhonevalue] = useState("");
  const [document, setDocumentValue] = useState("");
  const [date, setDate] = useState(null);

  return (
    <div className="container-register">
      <div className="names">
        <div className="name">
          <label>First name</label>
          <InputText
            className="userValue"
            onChange={(e) => setFisrtNameValue(e.target.value)}
          />
        </div>
        <div className="name">
          <label>Last name</label>
          <InputText
            className="userValue"
            onChange={(e: any) => setFisrtNameValue(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="value">
            <label>Birthday</label>
            <Calendar
              value={date}
              className="userValue"
              onChange={(e: any) => console.log(e.value)}
              dateFormat="dd/mm/yy"
            />
          </div>
          <div className="value">
            <label>Email</label>
            <InputText
              className="userValue"
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="value">
            <label>Password</label>
            <Password
              className="userValue"
              value={password}
              onChange={(e) => setPasswordValue(e.target.value)}
              feedback={false}
            />
          </div>
          <div className="value">
            <label>Phone</label>
            <InputMask
              value={phone}
              className="userValue"
              onChange={(e: any) => setPhonevalue(e.target.value)}
              mask="(99) 99999-9999"
              placeholder="(99)-999999"
            />
          </div>
        </div>
        <div className="value">
          <label>Document</label>
          <InputMask
            value={document}
            className="userValue"
            onChange={(e: any) => setDocumentValue(e.target.value)}
            mask="999-999-999-99"
            placeholder="999-999-999-99"
          />
        </div>
        <Button
          size="large"
          label="Register"
          onClick={() => console.log("opa")}
          style={{ marginTop: ".5rem" }}
        />
      </div>
    </div>
  );
};
