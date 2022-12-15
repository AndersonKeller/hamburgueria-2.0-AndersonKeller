import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
  max-width: 990px;
  margin: 0 auto;
  @media (min-width: 980px) {
    flex-wrap: wrap;
  }
`;
