import React, { useContext } from "react";
import {  BoxContainer } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import "./form.css";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <form className="formContainer">
        <input className="input" type="username" placeholder="Username" />
        <input className="input" type="text" placeholder="Full Name" />
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <input className="input" type="password" placeholder="Confirm Password" />
      </form>
      <Marginer direction="vertical" margin={10} />
      <button className="submitButton" type="submit">Signup</button>
      <Marginer direction="vertical" margin="1em" />
      <p className="mutedLink" href="#">
        Already have an account?
        <a className="boldLink" href="#" onClick={switchToSignin}>
          Sign in
        </a>
      </p>
    </BoxContainer>
  );
}