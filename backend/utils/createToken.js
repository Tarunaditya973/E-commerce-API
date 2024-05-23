const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (user, expiry) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, expiry);
};

module.exports = createToken;
