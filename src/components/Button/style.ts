import styled, { css } from "styled-components";

interface iButtonProps {
  sizeButton: string;
}

export const StyledButton = styled.button<iButtonProps>`
  background-color: var(--color-primary100);
  color: var(--color-gray0);
  padding: 0.5rem 1rem;
  ${({ sizeButton }) =>
    sizeButton === "big"
      ? css`
          width: 100%;
          height: 60px;
        `
      : css`
          height: 45px;
        `}
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
