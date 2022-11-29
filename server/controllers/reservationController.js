const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const Service = require("../models/serviceModel");
const Reservation = require("../models/reservationModel");

exports.newReservation = asyncErrorHandler(async (req, res, next) => {
  const { reservationItem, paymentStatus, totalCost } = req.body;

  // const reservationExist = await Reservation.findOne({ user: req.user._id });

  // if (reservationExist) {
  //     return next(new ErrorHandler("Reservation Already Placed", 400));
  // }

  const reservation = await Reservation.create({
    reservationItem,
    totalCost,
    user: req.user._id,
    contact: req.user.email,
  });

  res.status(201).json({
    success: true,
    reservation,
  });
});

// Get Single Reservation Details
exports.getSingleReservationDetails = asyncErrorHandler(
  async (req, res, next) => {
    const reservation = await Reservation.findById(req.params.id).populate(
      "user",
      "firstName lastName email avatar"
    );

    if (!reservation) {
      return next(new ErrorHandler("Reservation Not Found", 404));
    }

    res.status(200).json({
      success: true,
      reservation,
    });
  }
);

// Get Logged In User Reservations
exports.myReservations = asyncErrorHandler(async (req, res, next) => {
  const reservations = await Reservation.find({ user: req.user._id });

  if (!reservations) {
    return next(new ErrorHandler("Reservation Not Found", 404));
  }

  res.status(200).json({
    success: true,
    reservations,
  });
});

// Get Logged In Guru Reservations
exports.myGuruReservations = asyncErrorHandler(async (req, res, next) => {
  const reservations = await Reservation.find({
    "reservationItem.guru": req.user._id,
  });

  if (!reservations) {
    return next(new ErrorHandler("Reservation Not Found", 404));
  }

  res.status(200).json({
    success: true,
    reservations,
  });
});

async function updateSlots(id, quantity) {
  const service = await Service.findById(id);
  service.availableSlots -= quantity;
  await service.save({ validateBeforeSave: false });
}

// Delete Reservation
exports.deleteReservation = asyncErrorHandler(async (req, res, next) => {
  const reservation = await Reservation.findById(req.params.id);

  if (!reservation) {
    return next(new ErrorHandler("Reservation Not Found", 404));
  }

  await reservation.remove();

  res.status(200).json({
    success: true,
  });
});
