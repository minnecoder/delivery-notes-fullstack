const express = require("express");
const verify = require("./verifyToken");

const {
  getNotes,
  getDemoNotes,
  addNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes");

const router = express.Router();

router.route("/").get(verify, getNotes).post(verify, addNote);
router.route("/demo").get(getDemoNotes);
router.route("/:id").put(verify, updateNote).delete(verify, deleteNote);
module.exports = router;
