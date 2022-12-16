import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
  max-width: 990px;
  margin: 0 auto;
  transition: 1s ease;
  @media (min-width: 980px) {
    flex-wrap: wrap;
    min-width: 990px;
    min-height: 80vh;
  }
`;
