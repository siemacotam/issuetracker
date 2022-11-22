import { AppContextProvider } from "src/AppContext/AppContext";
import { AppWrapper, Header, Main } from "src/Layout";
import { ThemeProvider } from "src/Theme/ThemeProvider";

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider>
        <AppWrapper>
          <Header />
          <Main />
        </AppWrapper>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
