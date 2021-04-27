import React from "react";
import styled from "styled-components";

import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

function TodoTemplate() {
  return (
    <Container>
      <TodoTitle>TodoList from 'eassy' style</TodoTitle>
      <TodoInsert />
      <TodoItemList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 3px solid #000;
`;

export default TodoTemplate;
