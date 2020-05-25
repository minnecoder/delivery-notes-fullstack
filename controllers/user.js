const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// @desc Login in user
// @route POST /user/login
// @access Driver, Admin

exports.loginUser = async (req, res) => {
  // Check if user exists
  const user = await User.findOne({ userName: req.body.userName });
  if (!user) return res.json({ error: "User name or password is wrong" });

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "User name or password is wrong" });
  }

  // Create and assign token
  const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_SECRET
  );
  res.header("Authorization", token).json({ token });
};
