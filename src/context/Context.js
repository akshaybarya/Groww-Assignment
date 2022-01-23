import React, { useContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const CustomThemeContext = React.createContext();

// You can add more to these and move them to a separate file if you want.
const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00d09c",
      light: "#0a58ca",
      contrastText: "#ffff",
      paper: "grey",
      dark: "#ffff",
    },
    secondary: {
      main: "#00d09c",
      light: "#FFFF",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#121212",
      light: "#0a58ca",
      contrastText: "#ffff",
      paper: "#FFFF",
      dark: "#232323",
    },
    secondary: {
      main: "#FFFF",
      light: "#121212",
    },
  },
});

export function CustomThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false);

  function toggleTheme() {
    if (dark === true) {
      setDark(false);
    } else {
      setDark(true);
    }
  }

  const theme = useMemo(() => {
    if (dark === true) {
      return createTheme(darkTheme);
    }
    return createTheme(lightTheme);
  }, [dark]);

  return (
    <CustomThemeContext.Provider value={{ toggleTheme, dark }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export function useToggleTheme() {
  const context = useContext(CustomThemeContext);
  if (!context || context.toggleTheme === undefined) {
    throw new Error(
      "useCustomThemeContext must be used within an CustomThemeProvider"
    );
  }
  return context;
}
