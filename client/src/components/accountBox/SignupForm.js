import { useState } from 'react';
import { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import styled from "styled-components";
import "./form.css";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;





export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    fullName: '',
    password: '',
});

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState},
      });
      Auth.login(data.addUser.token)
    } catch (e) {
      console.error(e)
    }
  };



  return (
    <BoxContainer>

      
      <form onSubmit={handleFormSubmit} className="formContainer">
        <input className="input" type="username" placeholder="Username" name="username" value={formState.username} onChange={handleChange}/>
        <input className="input" type="email" placeholder="Email"  name="email" value={formState.email} onChange={handleChange}/>
        <input className="input" type="text" placeholder="Full Name"  name="fullName" value={formState.fullName} onChange={handleChange}/>
        <input className="input" type="password" placeholder="Password"  name="password" value={formState.password} onChange={handleChange}/>
        <input className="input" type="password" placeholder="Confirm Password"  name="password" value={formState.password} onChange={handleChange}/>
      <Marginer direction="vertical" margin={10} />
      <button className="submitButton" type="submit">Signup</button>
      <Marginer direction="vertical" margin="1em" />
      </form>
      <p className="mutedLink" href="#">
        Already have an account?
        <a className="boldLink" href="#" onClick={switchToSignin}>
          Sign in
        </a>
      </p>
    </BoxContainer>
  );
}