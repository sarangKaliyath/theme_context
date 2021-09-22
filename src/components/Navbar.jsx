import styled from 'styled-components';
import { ThemeContext } from '../Context/ThemeContext';
import {useContext} from 'react'
export function Navbar() {

    const {theme,handleTheme } = useContext(ThemeContext);

    const Navbar = styled.div`
      border: 1px solid gray;
      background-color: ${theme ? "#161a1d" : "#e5e5e5"};
      width: 99vw;
      height: 40px;
      display: flex;
      align-items: center;
    `;

    const Button = styled.button`
      width: 120px;
      border: None;
      background-color: ${theme ? "#161a1d" : "#e5e5e5"};
      color: ${theme ? "white" : "black"};
    `;
    const ButtonBox = styled.div`
        display:flex;
        width:auto;
    `
    const Text = styled.div`
        width:85%;
        text-align: center;
    `
    
    return (
      <Navbar>
        <ButtonBox>
          <Button onClick={handleTheme}>{theme ? "Light" : "Dark"}</Button>
        </ButtonBox>
        <Text>
          <h3>Navbar</h3>
        </Text>
      </Navbar>
    );

}