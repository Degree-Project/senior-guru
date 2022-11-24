const express = require("express");
const {
  getAllServices,
  getServices,
  getServiceDetails,
  createService,
  deleteService,
} = require("../controllers/serviceController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router.route("/test-s").get((req, res) => {
  res.send("I'm Working service route!!");
});

// router.route('/services').get(getAllServices);

router.route("/services/all").post(getServices);

router.route("/admin/service/new").post(isAuthenticatedUser, createService);

router.route("/service/:id").get(getServiceDetails);

module.exports = router;
