import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>메인 콘텐츠 영역</h1>
        <p>이곳에 페이지의 주요 내용이 표시됩니다.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
