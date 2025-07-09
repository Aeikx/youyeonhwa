const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    users_name: "sex",
  });
});

app.listen(4000, () => {
  console.log("Start Server on port 4000");
});
