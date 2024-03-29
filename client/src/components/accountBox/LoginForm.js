import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

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

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <BoxContainer>
      <form onSubmit={handleFormSubmit} noValidate validated={validated} className="formContainer">
        <input className="input" type="email" placeholder="Email" name='email' value={formState.email} onChange={handleChange}/>
        <input className="input" type="password" placeholder="Password" name='password' value={formState.password} onChange={handleChange}/>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <button className="submitButton" type="submit">Sign in</button>
      <Marginer direction="vertical" margin="1em" />
      </form>
      <p className="mutedLink" href="#">
        Don't have an account?{" "}
        <a className="boldLink" href="#" onClick={switchToSignup}>
          Signup
        </a>
      </p>
    </BoxContainer>
  );
}