import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>test</a>
      </div>
      <nav className="nav-links">
        <a href="/">메인페이지</a>
        <a href="/start">시작하기</a>
        <a href="/hall-of-fame">명예의 전당</a>
      </nav>
      <div className="auth-links">
        <a href="/login">로그인</a>
        <a href="/signup">회원가입</a>
      </div>
    </header>
  );
}

export default Header;