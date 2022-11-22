import { AppWrapper, Header, Main } from "src/Layout";
import { ThemeProvider } from "src/Theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Header />
        <Main />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
