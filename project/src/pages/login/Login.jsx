import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./Login.css"; // 스타일링을 위해 이 파일을 생성했다고 가정합니다.

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>로그인</h2>
          <form>
            <div className="input-group">
              <label htmlFor="id">아이디</label>
              <input id="id" name="id" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button
              className="login-button"
              onClick={(e) => {
                const userData = {
                  Id: document.getElementById("id").value,
                  Pw: document.getElementById("password").value,
                };

                if (e.target.disabled) return;
                e.target.disabled = true;

                fetch("http://localhost:4000/login", {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
                })
                  .then((res) => res.json())
                  .then((res) => {
                    if (res) {
                      location.href = "/";
                      alert("로그인 완료");
                    } else {
                      alert("아이디 또는 비밀번호가 잘못되었습니다.");
                      location.reload();
                    }
                  })
                  .catch(() => {})
                  .finally(() => {
                    setTimeout(() => (e.target.disabled = false), 1000);
                  });
              }}
            >
              로그인
            </button>
          </form>
          <p className="signup-link">
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
