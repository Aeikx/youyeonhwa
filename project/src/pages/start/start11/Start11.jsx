import React from "react";
import "./Start11.css";

function Start11() {
  return (
    <div className="start11-container">
      <h1>영어전용실 B - 11번째 방</h1>
      <img src="/env_img/env1.png" alt="방 이미지" />
      <div>
        <h4>
          &nbsp;벽을 더듬어 조심스레 불을 켰다. 희미하게 켜지는 형광등 아래,
          익숙한 교실이 모습을 드러냈다. 우리 학교 신관, 영어전용실B. 오늘 7교시
          수업 시간에 이곳에서 잠들었던 기억이 어렴풋이 떠올랐다.
        </h4>
        <h4>
          &nbsp;문을 열어보려 했지만, 손잡이는 쉽게 돌아가지 않았다. 닫힌 문
          너머는 정적만이 감돌았다. 창밖의 풍경도 이상하게 느껴졌다. 늦은
          시간이라는 건 알 수 있었지만, 그 시간까지도 내가 깨어나지 않았다는
          점이 이상했다. 무엇보다, 안에서 사람이 있는지 확인도 하지 않고 누군가
          문을 잠갔다는 건 납득되지 않았다.
        </h4>
        <h4>
          &nbsp;주머니를 뒤졌지만, 휴대폰은 없었다. 수업 시간이라 소지하지 않고
          있었던 게 기억났다. 누구에게도 연락할 수 없는 상황이었다.
        </h4>
        <h4>
          &nbsp;어떻게 해야 할지 정리되지 않은 생각 속에서 교실을 천천히
          돌아다니다, 교탁 위에 놓인 상자 하나를 발견했다. 작고 묵직한 금속
          상자. 영문 자물쇠로 잠겨 있었고, 그 위에 종이 한 장이 덩그러니 얹혀
          있었다.
        </h4>
      </div>
      <img src="/q_img/q11.png" alt="문제 이미지" />
      <input type="text" placeholder="답 입력" id="ans" />
      <button
        onClick={() => {
          if (document.getElementById("ans").value === "HIGH") {
            fetch("https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans", {
              method: "post",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ stage11: "clear" }),
            })
              .then((res) => {
                if (!res.ok) throw new Error("서버 응답 에러");
                return res.json();
              })
              .then(() => {
                location.href = "/start11-end";
              })
              .catch((err) => {
                console.error("Fetch Error:", err);
                alert("서버 요청 실패");
              });
          } else {
            alert("틀렸습니다!");
          }
        }}
      >
        제출
      </button>
    </div>
  );
}

export default Start11;
