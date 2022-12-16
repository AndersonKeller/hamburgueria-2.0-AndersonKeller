import styled, { css } from "styled-components";

export interface iHeaderProps {
  isHome?: boolean;
}

export const StyledHeader = styled.header<iHeaderProps>`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: auto;
  background-color: var(--color-gray0);
  ${({ isHome }) =>
    isHome &&
    css`
      @media (min-width: 875px) {
        & {
          background-color: transparent;
        }
      }
    `}
  img {
    max-width: 50%;
  }
  .container-input {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 40%;
    gap: 1rem;
    max-width: 300px;
  }

  .fake-header {
    display: flex;
    max-width: 375px;
    p {
      font-size: 0.85rem;
    }
  }
  .bag-div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border: 1px solid var(--color-gray20);
    border-radius: 5px;
    padding: 1rem;
  }

  .bag-img {
    position: absolute;
    top: 32px;
    left: 32px;
  }
  @media (min-width: 530px) {
    .container-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .container-input {
      width: 20%;
    }
  }
`;
export const StyledSpanCount = styled.span`
  padding: 0 0.125rem;
  border-radius: 8px;
  color: var(--color-white);
  background-color: var(--color-primary100);
  position: absolute;
  top: -12px;
`;
