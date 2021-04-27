import React from "react";
import styled from "styled-components";

function TodoInsert() {
  return (
    <Container>
      <input />
      <button>ADD</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export default TodoInsert;
