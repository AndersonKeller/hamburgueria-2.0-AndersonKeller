import styled from "styled-components";
export const StyledHeader = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 150px;
  background-color: var(--color-gray0);
  img {
    width: max-content;
  }
  .container-input {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    min-width: 250px;
  }
  button {
    position: absolute;
    top: 10px;
    right: 5px;
  }
  .container-header {
    align-items: center;
  }
  @media (min-width: 530px) {
    .container-header {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
