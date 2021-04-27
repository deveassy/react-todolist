import React from "react";
import styled from "styled-components";

function TodoTitle(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 40px auto;
  color: #fad586;
`;

export default TodoTitle;
