const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Your First Name"],
  },
  certificate: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Certificate", certificateSchema);
