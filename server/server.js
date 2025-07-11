const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log("Listening on port 4000");
});

app.get("/test", (req, res) => {
  res.send(req.query);
});

app.post("/signup", (req, res) => {
  const userId = req.body.userID;
  const userName = req.body.userName;
  const userPw = req.body.userPW;
  const userPw2 = req.body.userPW2;

  const newUser = {
    userId: userId,
    userName: userName,
    userPw: userPw,
    userPw2: userPw2,
  };

  const usersDB = JSON.parse(fs.readFileSync("./DB/users.json"));

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
