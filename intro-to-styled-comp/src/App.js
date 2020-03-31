import React from "react";
import "./App.css";
import styled, { css } from "styled-components";

function App() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    ${props =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `};
    ${props =>
      props.secondary &&
      css`
        background: white;
        color: blue;
      `};
    ${props =>
      props.third &&
      css`
        background: black;
        color: green;
      `};
  `;

  const Container = styled.div`
    text-align: center;
  `;
  return (
    <div className="App">
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button third>Thrid Button</Button>
      </Container>
    </div>
  );
}

export default App;
