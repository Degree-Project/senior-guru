const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary = require("cloudinary");
const Certificate = require("../models/certificateModel");
const path = require("path");
const fs = require("fs");

//Get certificates --GURU
exports.myCertificates = asyncErrorHandler(async (req, res, next) => {
  const certificates = await Certificate.find({ user: req.user._id });
  if (!certificates) {
    return next(new ErrorHandler("Certificates Not Found", 404));
  }

  res.status(200).json({
    success: true,
    certificates,
  });
});

// Upload Certificate --GURU
exports.uploadCertificate = asyncErrorHandler(async (req, res, next) => {
  const file = req.files.certificate;
  var fileName = file.name;
  const certificateFilePath = path.join(__dirname, fileName);

  await file.mv(certificateFilePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  });

  const myCloud = await cloudinary.v2.uploader.upload(certificateFilePath, {
    folder: "certificates",
  });

  fs.unlink(__dirname + "/" + fileName, (err) => {
    if (err) {
      throw err;
    }
    console.log("Temporary file successfuly deleted");
  });

  const { title } = req.body;

  const certificate = await Certificate.create({
    title,
    user: req.user._id,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    certificate,
  });
});

// Delete Certificate ---GURU
exports.deleteCertificate = asyncErrorHandler(async (req, res, next) => {
  const certificate = await Certificate.findById(req.params.id);

  if (!certificate) {
    return next(new ErrorHandler("Certificate Not Found", 404));
  }

  await certificate.remove();

  res.status(201).json({
    success: true,
    certificate,
  });
});
