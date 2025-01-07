import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Favorites from "./Favorite";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
