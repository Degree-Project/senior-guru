const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const {
  newReservation,
  getSingleReservationDetails,
  myReservations,
  myGuruReservations,
  deleteReservation,
} = require("../controllers/reservationController");

const router = express.Router();

router.route("/test-r").get((req, res) => {
  res.send("I'm Working reservation route!!");
});

router.route("/reservation/new").post(isAuthenticatedUser, newReservation);
router
  .route("/reservation/:id")
  .get(isAuthenticatedUser, getSingleReservationDetails);
router.route("/reservations/me").get(isAuthenticatedUser, myReservations);
router
  .route("/guru/reservations/me")
  .get(isAuthenticatedUser, myGuruReservations);

router
  .route("/guru/reservation/:id")
  .delete(isAuthenticatedUser, deleteReservation);

module.exports = router;
