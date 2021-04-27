import React from "react";
import styled from "styled-components";

function TodoTitle(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.h1``;

export default TodoTitle;
