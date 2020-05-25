const Note = require("../models/Note");

// @desc  Get all notes
// @route GET /notes
// @access Public
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ custName: 1 });

    return res.status(200).json({
      success: true,
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc  Get all notes for demo
// @route GET /notes/demo
// @access Public
exports.getDemoNotes = async (req, res) => {
  try {
    const notes = await Note.find(
      {},
      { address: 1, city: 1, custName: 1, deliveryLocation: 1, suite: 1 }
    ).sort({ custName: 1 });
    return res.status(200).json({
      success: true,
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc  Add note
// @route POST /notes
// @access Public
exports.addNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);

    return res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update note
// @route PUT /notes/:id
// @access
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id).exec();
    console.log(note);
    console.log(req.body);
    note.set(req.body);
    await note.save();
    return res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete note
// @route DELETE /notes/:id
// @access
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        success: false,
        error: "No note found",
      });
    }
    await note.remove();

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};
