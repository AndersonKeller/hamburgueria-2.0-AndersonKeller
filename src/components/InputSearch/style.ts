import styled from "styled-components";

export const StyledInputSearch = styled.input`
  border-radius: 0.5rem;
  background-color: var(--color-white);
  border: 2px solid var(--color-gray20);
  padding-left: 1.25rem;
  height: 50px;
  max-width: 200px;
  width: 100%;
  position: relative;
  animation: inputAnimation 1s ease;

  ::placeholder {
    color: var(--color-gray20);
  }

  @keyframes inputAnimationIn {
    from {
      top: -50px;
    }
    to {
      top: 0px;
    }
  }
`;
export const StyledDivSearch = styled.div`
  width: 200px;
`;
