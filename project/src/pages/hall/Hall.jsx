import React, { useEffect, useState } from "react";
import "./Hall.css";

function Hall() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/hall", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setList(res);
      });
  }, []);

  return (
    <div className="hall-container">
      <h1 className="hall-title">명예의 전당</h1>
      <div className="hall-list">
        {list.map((item, index) => (
          <div className="hall-entry" key={index}>
            <div className="rank">{index + 1}위</div>
            <div className="user">{item.userName}</div>
            <div className="time">{item.userId}</div>
            <div className="time">
              {new Date(item.clearTime).toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hall;
