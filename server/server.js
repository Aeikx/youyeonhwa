const express = require("express");
const cors = require("cors");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const { start } = require("repl");

const app = express();

const usersDB = JSON.parse(fs.readFileSync("./DB/users.json"));
const usersClearDB = JSON.parse(fs.readFileSync("./DB/users_clear.json"));
const hallOfFameDB = JSON.parse(fs.readFileSync("./DB/hall_of_fame.json"));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

//회원가입
app.post("/signup", (req, res) => {
  const userId = req.body.userID;
  const userName = req.body.userName;
  const userPw = req.body.userPW;

  const newUser = {
    userId: userId,
    userName: userName,
    userPw: userPw,
  };

  const stageClear = {
    userId: userId,
    stage1: "unclear",
    stage2: "unclear",
    stage3: "unclear",
    stage4: "unclear",
    stage5: "unclear",
    stage6: "unclear",
    stage7: "unclear",
    stage8: "unclear",
    stage9: "unclear",
    stage10: "unclear",
    stage11: "unclear",
    stage12: "unclear",
  };

  if (usersDB.find((user) => user.userId === userId) !== undefined) {
    console.log("error");
    res.send("false");
  } else {
    usersDB.push(newUser);
    fs.writeFileSync("./DB/users.json", JSON.stringify(usersDB));
    usersClearDB.push(stageClear);
    fs.writeFileSync("./DB/users_clear.json", JSON.stringify(usersClearDB));
    console.log("succed");
    res.send("true");
  }

  // console.log(newUser);
});

//로그인
app.post("/login", (req, res) => {
  const inputId = req.body.Id;
  const inputPw = req.body.Pw;
  const user = usersDB.find((user) => user.userId === inputId);

  if (user === undefined) {
    console.log(inputId, "아이디 없음");
    res.send("false");
  } else {
    if (user.userPw === inputPw) {
      res.cookie("userId", inputId, {
        httpOnly: true,
        // sameSite: "lax",
        // secure: false,
        path: "/",
        maxAge: 60 * 60 * 1000,
      });
      console.log(inputId, "로그인 성공");
      res.send("true");
    } else {
      console.log(inputId, "비밀번호 오류");
      res.send("false");
    }
  }
});

//로그인 확인
app.get("/check-login", (req, res) => {
  const userId = req.cookies.userId;

  if (userId) {
    res.json({ loggedIn: true, userId });
  } else {
    res.json({ loggedIn: false });
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("userId", {
    httpOnly: true,
    // sameSite: "lax",
    // secure: false,
    path: "/",
  });
  res.json({ success: true });
  console.log("로그아웃 성공");
});

//문제 답 확인
app.post("/q_ans", (req, res) => {
  const user = req.cookies.userId;
  const clearStage = Object.keys(req.body)[0];
  const userClear = usersClearDB.find((userData) => userData.userId === user);

  const newClearDB = usersClearDB.filter(
    (userData) => userData.userId !== user
  );

  userClear[clearStage] = "clear";

  newClearDB.push(userClear);
  fs.writeFileSync("./DB/users_clear.json", JSON.stringify(newClearDB));

  console.log(user, clearStage, "clear");

  res.status(200).json({ success: true });
});

//명예의 전당 입성
app.get("/clear", (req, res) => {
  const user = req.cookies.userId;
  const userData = usersDB.find((userData) => userData.userId === user);
  const userName = userData.userName;
  const userClear = usersClearDB.find((userData) => userData.userId === user);
  const hallInUser = hallOfFameDB.find((userData) => userData.userId === user);
  const rankTime = new Date();

  const userRank = {
    userName: userName,
    userId: user,
    clearTime: rankTime.toLocaleString(),
  };

  let cnt = 0;

  for (let i = 1; i <= 12; i++) {
    const key = "stage" + i;
    if (userClear[key] === "clear") {
      cnt = cnt + 1;
    }
  }
  console.log("문제 풀이 수: " + cnt);

  if (cnt === 12) {
    if (hallInUser === undefined) {
      hallOfFameDB.push(userRank);
      fs.writeFileSync("./DB/hall_of_fame.json", JSON.stringify(hallOfFameDB));
      res.json({ success: true });
      console.log("랭킹 등재");
    } else {
      res.json({ success: true });
      console.log("게임 클리어");
    }
  } else {
    res.json({ success: true });
    console.log("비정상적인 접근");
  }
});

app.get("/hall", (req, res) => {
  res.send(hallOfFameDB);
});

//서버 오픈
app.listen(4000, () => {
  console.log("Listening on port 4000");
});
