import React from "react";
import styled from "styled-components";

function TodoItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;

  return (
    <Container>
      <DoneButton onClick={() => onToggle(id)}>
        {checked ? <CheckBox src="./img/check.png" /> : null}
      </DoneButton>
      <Topic
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#ccc" : "#000",
        }}
      >
        {text}
      </Topic>
      <DeleteButton onClick={() => onRemove(id)}>
        <DeleteImg src="./img/trash.png" />
      </DeleteButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3px 0;
`;

const DoneButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0.1px solid #ccc;
  border-radius: 50%;
  background-color: transparent;
  font-size: 7px;
  cursor: pointer;
`;

const CheckBox = styled.img`
  width: 15px;
  height: 15px;
`;

const Topic = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 330px;
  height: 30px;
  padding: 0 10px;
  margin: 0 10px;
  border: 0.8px solid #ccc;
  font-size: 14px;
`;

const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const DeleteImg = styled.img`
  width: 25px;
  height: 25px;
`;

export default TodoItem;
