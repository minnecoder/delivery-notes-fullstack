const express = require('express');
const verify = require('./verifyToken');

const {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
} = require('../controllers/notes');

const router = express.Router();

router
  .route('/')
  .get(verify, getNotes)
  .post(verify, addNote);

router
  .route('/:id')
  .put(verify, updateNote)
  .delete(verify, deleteNote);
module.exports = router;
