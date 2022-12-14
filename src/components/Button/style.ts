import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-primary100);
  color: var(--color-gray0);
  padding: 0.5rem 1rem;
  :hover {
    background-color: var(--color-primary50);
  }
`;
export const StyledButtonTotal = styled(StyledButton)`
  background-color: var(--color-gray20);
  color: var(--color-gray50);
  padding: 1rem;
  :hover {
    background-color: var(--color-gray50);
    color: var(--color-gray20);
  }
`;
