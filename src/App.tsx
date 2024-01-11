import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Activities } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/activities" Component={Activities} />
      </Routes>
    </Router>
  );
}

export default App;
