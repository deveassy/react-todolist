import React from "react";
import styled from "styled-components";

function TodoInsert() {
  return (
    <Container>
      <TextInput placeholder="here" />
      <AddButton>ADD</AddButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const TextInput = styled.input`
  width: 300px;
  padding: 5px;
  margin: 0 5px;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
`;

const AddButton = styled.button`
  width: 60px;
  border: 0;
  border-radius: 5px;
  background-color: bisque;
  cursor: pointer;
`;

export default TodoInsert;
