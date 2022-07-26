import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Form from "./components/Form";
import { Flex } from "./components/styles/Flex.styled";
import { Bg, Shape } from "./components/styles/bg.styled";

const theme = {
  colors: {
    main: "#9E589E",
    secondary: "#c3abcc",
    light: "#ecf3f6",
    detail: "#f2e1f0",
    feature: "#6ce5d0",
    dark: "#3a203a",
    darkTransparent: "#3a203acf",
    error: "#ff0202",
  },
  fonts: {
    text: "Source Sans Pro",
    title: "Poppins",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Bg>
          <Shape></Shape>
          <Shape></Shape>
        </Bg>
        <Flex>
          <Form />
        </Flex>
      </>
    </ThemeProvider>
  );
};

export default App;
