import styled from "styled-components";
export const StyledCart = styled.div`
  border-radius: 0.5rem;
  max-width: 385px;
  margin-top: 1rem;
  position: relative;
  .cart-header {
    background-color: var(--color-primary100);
    text-align: left;
    color: var(--color-white);
    padding: 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      color: var(--color-gray0);
    }
  }
  .cart-header h2 {
    font-weight: 700;
    font-size: var(--font-ttle3);
  }
  .cart-body {
    background-color: var(--color-gray0);
    min-height: 150px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    max-height: 300px;
    overflow-y: auto;
  }
  .cart-body img {
    border-radius: 0.5rem;
  }
`;
