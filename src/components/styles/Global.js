import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.light};
}

body {
    background: ${({ theme }) => theme.colors.main};
    font-family: 'Source Sans Pro', "Lato", "Poppins",
    sans-serif;
}

.taskCompleted {
    /* font-size: 2px; */
    text-decoration: dashed;
  }
`;
export default GlobalStyles;
