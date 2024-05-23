const createToken = require("../utils/createToken");
const User = require("../models/user.model");
const signUp = async (req, res) => {
  try {
    const { email, password, name, address } = req.body;
    let existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res.json({ status: false, message: "User already exists" });
    const user = new User({ email, password, name, address });
    const savedUser = await user.save();
    const accessToken = createToken(savedUser, { expiresIn: "24h" });
    const refreshToken = createToken(savedUser, { expiresIn: "90d" });
    return res
      .status(201)
      .json({
        message: "User created successfully",
        status: true,
        user: savedUser,
      })
      .header("Authorization", accessToken)
      .cookie("RefreshToken", refreshToken);
  } catch (err) {
    console.log("Error: ", err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user)
      return res.json({ status: false, message: "User does not exist" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", status: false });
    }

    const accessToken = createToken(user, { expiresIn: "24h" });
    const refreshToken = createToken(user, { expiresIn: "90d" });

    return res
      .status(200)
      .json({ message: "Login successful", status: true, user: user })
      .header("Authorization", accessToken)
      .cookie("RefreshToken", refreshToken);
  } catch (err) {
    console.log("Error while logging in", err.message);
    res.json({ messge: err.message, status: false });
  }
};

module.exports = {
  signUp,
  login,
};
