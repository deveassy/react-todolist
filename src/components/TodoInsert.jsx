import React, { useState } from "react";
import styled from "styled-components";

function TodoInsert(props) {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
    props.onSubmit(content);
    setContent("");
    // submit을 한 후에는 input 창을 비우기
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="text"
          placeholder="here"
          value={content}
          onChange={handleChange}
        />
        <AddButton
          type="submit"
          onClick={handleSubmit}
          onKeyPress={handleKeyPress}
        >
          ADD
        </AddButton>
      </form>
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
