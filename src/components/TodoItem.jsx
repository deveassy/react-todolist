import React from "react";
import styled from "styled-components";

function TodoItem() {
  return (
    <Container>
      <button>DONE</button>
      <p>할일목록</p>
      <button>DELETE</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export default TodoItem;
