const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// @desc Add user
// @route /user/add
// @access Verified User

exports.addUser = async (req, res) => {
  // Check if user is already used
  const userExists = await User.findOne({ userName: req.body.userName });
  if (userExists)
    return res.status(400).json({ error: "User name already exists" });

  // Create hashed password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const user = await User.create({
      userName: req.body.userName,
      password: hashedPassword,
      role: "user",
    });

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Login in user
// @route POST /user/login
// @access Driver, Admin

exports.loginUser = async (req, res) => {
  // Check if user exists
  const user = await User.findOne({ userName: req.body.userName });
  if (!user) {
    return res.status(400).json({ error: "User name or password is wrong" });
  }

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
  return res.header("Authorization", token).json({ token });
};
