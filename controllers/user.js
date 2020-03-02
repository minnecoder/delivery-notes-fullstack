const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @desc Login in user
// @route POST /user/login
// @access Driver, Admin

exports.loginUser = async (req, res) => {
  if (req.body.userName === 'demo' && req.body.password === 'password') {
    // Create and assign token
    const token = jwt.sign(
      { name: req.body.userName },
      process.env.JWT_SECRET,
    );
    return res.header('Authorization', token).json({ token });
  }
};
