import React from "react";
import styled from "styled-components";

function TodoItem() {
  return (
    <Container>
      <DoneButton>
        <img src="./img/check.png" style={{ width: 15, height: 15 }} />
      </DoneButton>
      <Topic>할일목록</Topic>
      <DeleteButton>
        <img src="./img/trash.png" style={{ width: 25, height: 25 }} />
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

export default TodoItem;
