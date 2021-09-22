import { Input } from "./Input";
import { Navbar } from "./Navbar";
import { Form } from "./Form";
import { Light, Dark } from "./styles";
import styled from 'styled-components';
import { useContext } from 'react';
import {ThemeContext} from '../Context/ThemeContext'

export function MainPage() {

  const {theme} = useContext(ThemeContext);

  const Page = styled.div`
    height:100%;
  `;

  console.log(theme)

  return (
    <Page style={theme? Dark:Light}>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="form">
        <Form>
          <h3>My Form</h3>
          <Input type={"text"} placeholder="Enter Name" label={"Name"}></Input>
          <Input
            type={"text"}
            placeholder="Enter Address"
            label={"Address"}
          ></Input>
          <Input type={"number"} placeholder="Enter Age" label={"Age"}></Input>
        </Form>
      </div>
    </Page>
  );
}
