import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./sections/AboutUs";
import Impact from "./sections/Impact";
import ImpactPage from "./pages/ImpactPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />}></Route>

        <Route path="/impact" element={<ImpactPage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
