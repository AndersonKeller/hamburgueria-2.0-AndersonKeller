import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
  --color-primary100: #27ae60;
  --color-primary50: #93d7af;
  --color-secundary: #eb5757;
  
  --color-gray100: #333333;
  --color-gray50: #828282;
  --color-gray20: #e0e0e0;
  --color-gray0: #f5f5f5;
  --color-white: #fff;
  --feed-negative: #e60000;
  --feed-warning: #ffcd07;
  --feed-sucess: #168821;
  --feed-information: #155bcb;
  --font-title1: 1.625rem;
  --font-title2: 1.375rem;
  --font-title3: 1.125rem;
  --font-title4: 0.875rem;
  --font-text1: 1rem;
  --font-caption: 0.75rem;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
main{
  padding: 1rem;
}
button,a {
  
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
}
.linkRegister{
  text-decoration: none;
  background-color: var(--color-gray0);
  color: var(--color-gray50);
  padding: 0.5rem 1rem;
  :hover {
    background-color: var(--color-primary50);
  }
}
.container {
  padding: 1rem 0;
  max-width: 1400px;
  display: flex;
 flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;
}
.react-icons{
  color: var(--color-gray50);
  font-size:1.5rem;
  font-weight: 900;
  cursor: pointer;
}
@media (min-width: 980px) {
  .container {
    flex-direction: row;
  }
}
`;
export default GlobalStyle;
