import styled from "styled-components";
import { useContext } from 'react';
import {ThemeContext} from '../Context/ThemeContext'

export function Input({ type, placeholder, label }) {

  const { theme } = useContext(ThemeContext);

  const Input = styled.input`
    width: 50%;
    border:none;
    outline:none;
    border-bottom: 1px solid gray;
    background-color: ${theme ? "black" : "white"};
    color:${theme ? "black" : "white"};
    &::placeholder{color:${theme? "white":"black"}}
  `;
  const Label = styled.label`
    width: 60%;
    padding:3%;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <Label>
      {label}: <Input type={type} placeholder={placeholder}></Input>
    </Label>
  );
}
