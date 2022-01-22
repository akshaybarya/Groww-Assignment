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

//Rendering the Component

// Creating A Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#00d09c",
      light: "#66e3c4",
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
