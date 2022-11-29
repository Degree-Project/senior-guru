const express = require("express");
const {
  getAllServices,
  getServices,
  getServiceDetails,
  createService,
  deleteService,
  myServices,
} = require("../controllers/serviceController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router.route("/test-s").get((req, res) => {
  res.send("I'm Working service route!!");
});

// router.route('/services').get(getAllServices);

router.route("/services/all").post(getServices);

router.route("/admin/service/new").post(isAuthenticatedUser, createService);
router.route("/guru/service/all").get(isAuthenticatedUser, myServices);
router.route("/guru/service/:id").delete(isAuthenticatedUser, deleteService);

router.route("/service/:id").get(getServiceDetails);

module.exports = router;
