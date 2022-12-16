import styled from "styled-components";
export const StyledCartProduct = styled.div`
  height: 70px;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
  img {
    height: 100%;
    width: 70px;
    background-color: var(--color-gray20);
  }
  div {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
  }
  div h2 {
    width: 70%;
    font-size: var(--font-title3);
    font-weight: 700;
  }
  div p {
    width: 75%;
    font-size: var(--font-caption);
    color: var(--color-gray50);
  }
  div button {
    background: transparent;
    color: var(--color-gray20);
    :hover {
      color: var(--color-gray50);
    }
  }
`;
