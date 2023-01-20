import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
