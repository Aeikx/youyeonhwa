import React from "react";
import Header from "../../components/Header";
import "./Signup.css"; // 스타일링을 위해 이 파일을 생성했다고 가정합니다.

function Signup() {
  return (
    <>
      <div className="signup-container">
        <div className="signup-box">
          <h2>회원가입</h2>
          <div className="input-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">아이디</label>
            <input id="id" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input id="password" name="password" type="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
            />
          </div>
          <button
            className="signup-button"
            onClick={(e) => {
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
          <p className="login-link">
            계정이 있으신가요? <a href="/login">로그인</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
