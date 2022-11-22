import { GlobalStyle } from "src/Layout";
import { ThemeProvider as StyledThemeProvider } from "styled-components/macro";
import { colors } from "./colors";
import { fonts } from "./fonts";

interface ProviderProps {
  children: JSX.Element;
}

export const ThemeProvider = ({ children }: ProviderProps) => (
  <StyledThemeProvider theme={{ fonts, colors }}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);
