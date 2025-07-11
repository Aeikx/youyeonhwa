import React from "react";
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
              <label htmlFor="email">아이디</label>
              <input id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-button">
              로그인
            </button>
          </form>
          <p className="signup-link">
            계정이 없으신가요? <a href="/signup">회원가입</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
