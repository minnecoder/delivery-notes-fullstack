const jwt = require('jsonwebtoken');

module.exports = function verify(req, res, next) {
  // Checks to see if there is an Authorization header
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    return next();
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
};
