const express = require("express");
const {
  myCertificates,
  uploadCertificate,
  deleteCertificate,
} = require("../controllers/certificateController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router.route("/test-c").get((req, res) => {
  res.send("I'm Working Certificate route!!");
});

router.route("/guru/certificate/all").get(isAuthenticatedUser, myCertificates);
router
  .route("/guru/certificate/new")
  .post(isAuthenticatedUser, uploadCertificate);
router
  .route("/guru/certificate/:id")
  .delete(isAuthenticatedUser, deleteCertificate);

module.exports = router;
