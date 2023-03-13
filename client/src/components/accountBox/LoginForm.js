import { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import styled from "styled-components";
import "./form.css";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

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
      <button className="submitButton" type="submit">Sign in</button>
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