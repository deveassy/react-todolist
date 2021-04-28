import React, { useState, useRef } from "react";
import styled from "styled-components";

import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

function TodoTemplate() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);

  const handleSubmit = (text) => {
    // setTodos([...todos, text]);
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        // if (todo.id === id) {
        //   todo.checked = !todo.checked;
        // }
        // return todo;
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

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
  border-radius: 20px;
  background-color: #fff;
`;

export default TodoTemplate;
