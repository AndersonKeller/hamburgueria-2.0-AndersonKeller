import styled from "styled-components";

export const StyledInput = styled.fieldset`
  border: none;
  position: relative;
  width: 100%;
  input {
    background-color: var(--color-gray0);
    height: 60px;
    padding-left: 15px;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
    &::placeholder {
      color: var(--color-gray50);
    }
    &:focus {
      border: 2px solid #333333;
    }
  }
  label {
    position: absolute;
    z-index: 10;
    left: 10px;
    top: -10px;
    background-color: var(--color-gray0);
  }
`;
