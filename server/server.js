const express = require("express");
const cors = require("cors");
const fs = require("fs");
const cookieParser = require("cookie-parser");

const app = express();

const usersDB = JSON.parse(fs.readFileSync("./DB/users.json"));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.post("/signup", (req, res) => {
  const userId = req.body.userID;
  const userName = req.body.userName;
  x``;
  const userPw = req.body.userPW;

  const newUser = {
    userId: userId,
    userName: userName,
    userPw: userPw,
  };

  if (usersDB.find((user) => user.userId === userId) !== undefined) {
    console.log("error");
    res.send("false");
  } else {
    usersDB.push(newUser);
    fs.writeFileSync("./DB/users.json", JSON.stringify(usersDB));
    console.log("succed");
    res.send("true");
  }

  // console.log(newUser);
});

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
        sameSite: "lax",
        secure: false,
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

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
