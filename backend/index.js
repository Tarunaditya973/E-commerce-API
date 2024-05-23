const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const dbConnection = require("./DB/dbConnection");
dbConnection();

app.use(express.json());
app.use("/api/auth", userRoutes);

app.post("/refresh", (req, res) => {
  const refreshToken = req.cookies["RefreshToken"];
  if (!refreshToken) {
    return res.status(401).send("Access Denied. No refresh token provided.");
  }

  try {
    const decoded = jwt.verify(refreshToken, secretKey);
    const accessToken = jwt.sign({ user: decoded.user }, secretKey, {
      expiresIn: "1h",
    });

    res.header("Authorization", accessToken).send(decoded.user);
  } catch (error) {
    return res.status(400).send("Invalid refresh token.");
  }
});

app.listen(8000, () => {
  console.log("Server Started");
});
