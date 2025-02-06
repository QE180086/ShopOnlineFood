import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
  background: "black",
  color: "white",
};

export const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <div style={{ background: theme.background, color: theme.color, minHeight: "100vh" }}>
        {children}
      </div>
    </StyledThemeProvider>
  );
};
