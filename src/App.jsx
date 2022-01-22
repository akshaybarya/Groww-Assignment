import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
} from "@material-ui/core";
// All Page Components
import AllBanks from "./pages/AllBanks";
import BankDetails from "./pages/BankDetails";
import Favourite from "./pages/Favourite";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/common/Navbar";
// importing CSS
import "./App.css";
import { red } from "@material-ui/core/colors";

//Rendering the Component

// Creating A Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#00d09c",
      light: "#0a58ca",
      contrastText: "#ffff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Paper className="App">
          <Navbar />

          <div className="PagesContainer">
            <Routes>
              <Route exact path="/all-banks" element={<AllBanks />} />
              <Route exact path="/favourites" element={<Favourite />} />
              <Route path="/bank-details/:id" element={<BankDetails />} />
              <Route path="/" element={<PageNotFound />} />
            </Routes>
          </div>
        </Paper>
      </Router>
    </ThemeProvider>
  );
};

export default App;

/* 
  const theme = createTheme({
  palette: {
    /*primary: {
      /* #ff5555  #1426e3 
      main: "#1ec1c9",
      light: "#ff7777",
      dark: "#ff3333",
      contrastText: "#fff",
    },
    primary: {
      /* #059ca3 
      main: "#33ccc5",
      light: "#2cc2c9",
      dark: "#0a58ca",
      contrastText: "#fff",
    },
    secondary: {
      main: "#93329e",
      text: "#93329e",
      light: "#b4aee8",
      dark: "#440a67",
      // contrastText: "#ffe3fe",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    contrastThreshold: 3,
  },
});
*/
