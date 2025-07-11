import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <h1>청주고 팬티도둑 찾기 대작전!!</h1>
        <p>이곳에 페이지의 주요 내용이 표시됩니다.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
