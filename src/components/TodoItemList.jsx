import React from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

function TodoItemList() {
  return (
    <Container>
      <TodoItem />
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
