import styled from "styled-components";

export const StyledCartTotal = styled.div`
  max-width: 100%;
  background-color: var(--color-gray0);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--color-gray20);
  flex-wrap: wrap;
  padding: 1rem;
  h3 {
    font-size: var(--font-title4);
    font-weight: 600;
  }
  button {
    width: 100%;
    font-size: var(--font-text1);
  }
  span {
    font-weight: 600;
    color: var(--color-gray50);
    font-weight: 600;
  }
`;
