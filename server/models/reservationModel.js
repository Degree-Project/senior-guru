const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  reservationItem: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    service: {
      type: mongoose.Schema.ObjectId,
      ref: "Service",
      required: true,
    },
    guru: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
    default: "false",
  },
  totalCost: {
    type: Number,
    required: true,
    default: 0,
  },
  reservationStatus: {
    type: String,
    default: "Processing",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
