import styled from "styled-components";

export const StyledProduct = styled.li`
  border: 2px solid var(--color-gray20);
  border-radius: 0.5rem;
  min-width: 300px;
  cursor: pointer;
  :hover {
    border: 2px solid var(--color-primary100);
  }
  img {
    width: 100%;
    height: 150px;
    background-color: var(--color-gray20);
    object-fit: contain;
  }
  .div-infos {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .div-infos h2 {
    font-size: var(--font-title3);
    font-weight: 700;
  }
  .div-infos span {
    font-size: var(--font-caption);
    font-weight: 400;
    color: var(--color-gray50);
  }
  .div-infos p {
    font-size: var(--font-title4);
    color: var(--color-primary100);
    font-weight: 600;
  }
`;
