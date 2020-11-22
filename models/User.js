const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
    minlength: 8,
  },
  role: {
    type: String,
    required: true,
    enum: ["driver", "manager", "admin", "user", "customer"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
