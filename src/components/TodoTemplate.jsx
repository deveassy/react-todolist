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
  width: 500px;
  height: 650px;
  border: 3px solid #000;
  background-color: #fff;
`;

export default TodoTemplate;
