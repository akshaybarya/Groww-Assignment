import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paper } from "@material-ui/core";
// All Page Components
import AllBanks from "./pages/allBanks";
import BankDetails from "./pages/bankDetails/index";
import Favourite from "./pages/favourite/index";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/common/navbar/Navbar";
// importing CSS
import "./App.css";
import { CustomThemeProvider } from "./context/Context";

//Rendering the Component

const App = () => {
  return (
    <CustomThemeProvider>
      <Router>
        <Paper className="App">
          <Navbar />

          <div className="PagesContainer">
            <Routes>
              <Route exact path="/all-banks" element={<AllBanks />} />
              <Route exact path="/favourites" element={<Favourite />} />
              <Route path="/bank-details/:id" element={<BankDetails />} />
              <Route element={<PageNotFound />} />
            </Routes>
          </div>
        </Paper>
      </Router>
    </CustomThemeProvider>
  );
};

export default App;
