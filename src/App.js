import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
