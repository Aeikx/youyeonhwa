import React from 'react';
import Header from '../../components/Header';
import './Signup.css'; // 스타일링을 위해 이 파일을 생성했다고 가정합니다.

function Signup() {
  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-box">
          <h2>회원가입</h2>
          <form>
            <div className="input-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">아이디</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button type="submit" className="signup-button">회원가입</button>
          </form>
          <p className="login-link">
            계정이 있으신가요? <a href="/login">로그인</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
