import React, { useContext } from "react";
import { BoxContainer } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import "./form.css";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <form className="formContainer">
        <input className="input" type="username" placeholder="Username" />
        <input className="input" type="password" placeholder="Password" />
      </form>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <button className="submitButton" type="submit">Signin</button>
      <Marginer direction="vertical" margin="1em" />
      <p className="mutedLink" href="#">
        Don't have an account?{" "}
        <a className="boldLink" href="#" onClick={switchToSignup}>
          Signup
        </a>
      </p>
    </BoxContainer>
  );
}