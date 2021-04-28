import React from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

function TodoItemList({ todos, onRemove, onToggle }) {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px 10px;
  height: 460px;
  overflow: scroll;
`;

export default TodoItemList;
