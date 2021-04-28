import React from "react";
import styled from "styled-components";

function TodoTitle({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 40px auto;
  color: #ffd384;
`;

export default TodoTitle;
