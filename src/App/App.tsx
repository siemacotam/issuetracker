import { useEffect } from "react";
import { setIssues } from "src/AppContext/Reducers/mainReducer.helpers";
import { useAppContext } from "src/hooks";
import { AppWrapper, Header, Main } from "src/Layout";
import { ThemeProvider } from "src/Theme/ThemeProvider";

function App() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    const existedIssues = localStorage.getItem("issues");
    if (existedIssues) {
      const list = JSON.parse(existedIssues);
      dispatch(setIssues(list));
    }
  }, []);

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
