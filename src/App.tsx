import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Distribution } from "./components/Distribution/Distribution";
import { Products } from "./components/Products/Products";
import { Differentials } from "./components/Differentials/Differentials";
import { FinalCTA } from "./components/FinalCTA/FinalCTA";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Hero />
        <About />
        <Distribution />
        <Products />
        <Differentials />
        <FinalCTA />
      </main>
    </ThemeProvider>
  );
}

export default App;
