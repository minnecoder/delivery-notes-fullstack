const express = require("express");
const { loginUser, addUser } = require("../controllers/user");

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/add").post(addUser);
module.exports = router;
