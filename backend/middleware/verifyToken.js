const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.json({
      status: false,
      message: "Access denied. No token Provided",
    });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("Error : ", err);
    return res.json({ status: false, message: "Invalid Token" });
  }
};
