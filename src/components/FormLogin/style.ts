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
  h2 {
    font-size: var(--font-title3);
  }
  .linkLogin {
    position: absolute;
    z-index: 12;
    top: 20px;
    right: 16px;
    font-size: var(--font-title4);
  }
  .linkRegister {
    width: 100%;
    height: 60px;
    text-align: center;
    text-decoration: none;
    background-color: var(--color-gray0);
    color: var(--color-gray50);
    padding: 1rem;
    :hover {
      background-color: var(--color-primary50);
    }
  }
  span {
    color: var(--feed-negative);
    font-size: var(--font-caption);
    font-weight: 400;
    line-height: 16px;
  }
`;
