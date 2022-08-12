import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.light};
}
html{
    /* height: 100vh; */
    height: -webkit-fill-available;
    background: ${({ theme }) => theme.colors.main};
}


body {
    font-family: 'Source Sans Pro', "Lato", "Poppins",
    sans-serif;
    height: 100vh;
    height: -webkit-fill-available; 
} 

.taskCompleted {
    text-decoration: dashed;
  }
`;
export default GlobalStyles;
