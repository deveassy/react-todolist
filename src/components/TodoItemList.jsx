import React from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

function TodoItemList() {
  return (
    <Container>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export default TodoItemList;
