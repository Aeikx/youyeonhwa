import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/login/Signup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start/Start.jsx";
import Hall_of_fame from "./pages/hall/Hall.jsx";
import Header from "./components/Header";

export default function Not() {
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/start" element={<Start />} />
        <Route path="/hall-of-fame" element={<Hall_of_fame />} />
        <Route path="*" element={<Not />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
