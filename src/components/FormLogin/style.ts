import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem;
  gap: 1rem;
  position: relative;
  .linkLogin {
    position: absolute;
    z-index: 12;
    top: 16px;
    right: 16px;
  }
`;
