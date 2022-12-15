import { createGlobalStyle, css } from "styled-components";
import { iHeaderProps } from "../components/Header/styles";

const GlobalStyle = createGlobalStyle<iHeaderProps>`

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
#root{
  height: 100vh;
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
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
    align-items: center;
    justify-content: center;
}
button,a {
  
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
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
${({ isHome }) =>
  !isHome &&
  css`
    @media (min-width: 875px) {
      #root {
        transition: linear 1s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1000px;
        margin: 0 auto;
      }
    }
    @media (min-width: 980px) {
      .container {
        transition: 1s ease;
        flex-direction: row;
      }
    }
  `}


`;
export default GlobalStyle;
