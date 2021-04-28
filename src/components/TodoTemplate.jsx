import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";

import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

function TodoTemplate() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(4);

  const handleSubmit = useCallback(
    (text) => {
      // setTodos([...todos, text]);
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <Container>
      <TodoTitle>TODO LIST - eassy</TodoTitle>
      <TodoInsert onSubmit={handleSubmit} />
      <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle} />
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
