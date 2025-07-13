import React from "react";
import "./Start.css";

function Start() {
  return (
    <div className="start-container">
      <h1>메인 스토리</h1>
      <img src="https://via.placeholder.com/320x180" alt="대표 이미지" />
      <h4>
        긴 잠에서 깨어났다. 몸은 묘하게 개운했지만, 사지를 움직일 때마다 저릿한
        감각이 따라붙었다. 눈앞은 흐렸고, 어둠에 익숙해지는 데 시간이 필요했다.
        창문 밖에선 달빛이 스며들고 있었지만, 어딘가 멍한 그 빛은 시야를
        밝혀주지 못했다.
      </h4>
      <button onClick={() => (location.href = "/start1")}>다음</button>
    </div>
  );
}

export default Start;
