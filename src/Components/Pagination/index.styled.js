import styled from "styled-components";

const StyledPagination = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  position: fixed;
  bottom: 0px;
  background-color: lightblue;
  display: flex;
  justify-content: center;

  input {
    text-align: center;
  }

  button {
    cursor: pointer;
  }
`;

export default StyledPagination;
