import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <h1>메인 콘텐츠 영역</h1>
        <p>이곳에 페이지의 주요 내용이 표시됩니다.</p>
        <input type="text" id="text" />
        <button
          onClick={() => {
            console.log(document.getElementById("text").value);
            fetch("http://localhost:4000/test", {});
          }}
        >
          submit
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
