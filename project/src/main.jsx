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
import Start1 from "./pages/start/start1/Start1.jsx";
import Start1End from "./pages/start/start1/Start1-end.jsx";
import Start2 from "./pages/start/start2/Start2.jsx";
import Start2End from "./pages/start/start2/Start2-end.jsx";
import Start3 from "./pages/start/start3/Start3.jsx";
import Start3End from "./pages/start/start3/Start3-end.jsx";
import Start4 from "./pages/start/start4/Start4.jsx";
import Start4End from "./pages/start/start4/Start4-end.jsx";
import Start5 from "./pages/start/start5/Start5.jsx";
import Start5End from "./pages/start/start5/Start5-end.jsx";
import Start6 from "./pages/start/start6/Start6.jsx";
import Start6End from "./pages/start/start6/Start6-end.jsx";
import Start7 from "./pages/start/start7/Start7.jsx";
import Start7End from "./pages/start/start7/Start7-end.jsx";
import Start8 from "./pages/start/start8/Start8.jsx";
import Start8End from "./pages/start/start8/Start8-end.jsx";
import Start9 from "./pages/start/start9/Start9.jsx";
import Start9End from "./pages/start/start9/Start9-end.jsx";
import Start10 from "./pages/start/start10/Start10.jsx";
import Start10End from "./pages/start/start10/Start10-end.jsx";
import Start11 from "./pages/start/start11/Start11.jsx";
import Start11End from "./pages/start/start11/Start11-end.jsx";
import Start12 from "./pages/start/start12/Start12.jsx";
import Start12End from "./pages/start/start12/Start12-end.jsx";

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
        <Route path="/start1" element={<Start1 />} />
        <Route path="/start1-end" element={<Start1End />} />
        <Route path="/start2" element={<Start2 />} />
        <Route path="/start2-end" element={<Start2End />} />
        <Route path="/start3" element={<Start3 />} />
        <Route path="/start3-end" element={<Start3End />} />
        <Route path="/start4" element={<Start4 />} />
        <Route path="/start4-end" element={<Start4End />} />
        <Route path="/start5" element={<Start5 />} />
        <Route path="/start5-end" element={<Start5End />} />
        <Route path="/start6" element={<Start6 />} />
        <Route path="/start6-end" element={<Start6End />} />
        <Route path="/start7" element={<Start7 />} />
        <Route path="/start7-end" element={<Start7End />} />
        <Route path="/start8" element={<Start8 />} />
        <Route path="/start8-end" element={<Start8End />} />
        <Route path="/start9" element={<Start9 />} />
        <Route path="/start9-end" element={<Start9End />} />
        <Route path="/start10" element={<Start10 />} />
        <Route path="/start10-end" element={<Start10End />} />
        <Route path="/start11" element={<Start11 />} />
        <Route path="/start11-end" element={<Start11End />} />
        <Route path="/start12" element={<Start12 />} />
        <Route path="/start12-end" element={<Start12End />} />
        <Route path="/hall-of-fame" element={<Hall_of_fame />} />
        <Route path="*" element={<Not />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
