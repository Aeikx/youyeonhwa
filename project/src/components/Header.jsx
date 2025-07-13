import React, { useState, useEffect } from "react";
import "../App.css";
import Cookies from "js-cookie";

function Header() {
  useEffect(() => {
    fetch("http://localhost:4000/check-login", {
      credentials: "include", // ✅ HttpOnly 쿠키를 자동 포함시킴
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          console.log("로그인됨", data.userId);
          document.getElementById("login").style.display = "None";
          document.getElementById("signup").style.display = "None";
          document.getElementById("logout").textContent =
            data.userId + " 로그아웃";
          document.getElementById("logout").style.display = "";
        } else {
          document.getElementById("login").style.display = "";
          document.getElementById("signup").style.display = "";
          document.getElementById("logout").style.display = "None";
        }
      });
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-title">
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          test
        </a>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`header-links ${menuOpen ? "open" : ""}`}>
        <nav className="nav-links">
          <a href="/" className="blue-links">
            메인페이지
          </a>
          <a
            className="blue-links"
            onClick={() => {
              fetch("http://localhost:4000/check-login", {
                credentials: "include", // ✅ HttpOnly 쿠키를 자동 포함시킴
              })
                .then((res) => res.json())
                .then((data) => {
                  if (!data.loggedIn) {
                    alert("로그인이 필요합니다.");
                    location = "/login";
                  } else {
                    location = "/start";
                  }
                });
            }}
          >
            시작하기
          </a>
          <a href="/hall-of-fame" className="blue-links">
            명예의 전당
          </a>
        </nav>
        <div className="auth-links">
          <a href="/login" id="login" className="blue-links">
            로그인
          </a>
          <a href="/signup" id="signup" className="blue-links">
            회원가입
          </a>
          <a
            id="logout"
            className="red-links"
            onClick={() => {
              fetch("http://localhost:4000/logout", {
                credentials: "include",
              });
              location.href = "/";
            }}
          >
            로그아웃
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
