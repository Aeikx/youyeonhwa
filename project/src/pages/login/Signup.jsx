import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>회원가입</h2>
        <form>
          <input type="text" id="name" placeholder="이름" />
          <input type="text" id="id" placeholder="아이디" />
          <input type="password" id="password" placeholder="비밀번호" />
          <input
            type="password"
            id="confirmPassword"
            placeholder="비밀번호 확인"
          />
          <button
            className="signup-button"
            onClick={(e) => {
              const password = document.getElementById("password").value;
              const confirmPassword =
                document.getElementById("confirmPassword").value;

              if (password !== confirmPassword) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
              }

              if (e.target.disabled) return;
              e.target.disabled = true;

              const userData = {
                userID: document.getElementById("id").value,
                userName: document.getElementById("name").value,
                userPW: document.getElementById("password").value,
                userPW2: document.getElementById("confirmPassword").value,
              };

              fetch("http://localhost:4000/signup", {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
              })
                .then((res) => res.json())
                .then((res) => {
                  if (res) {
                    location.href = "/";
                    alert("회원가입 완료");
                  } else {
                    alert("중복된 아이디입니다.");
                    location.reload();
                  }
                })
                .catch(() => {})
                .finally(() => {
                  setTimeout(() => (e.target.disabled = false), 1000);
                });
            }}
          >
            회원가입
          </button>
        </form>
        <div className="login-link">
          계정이 있으신가요? <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;