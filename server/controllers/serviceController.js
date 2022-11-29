const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const SearchFeatures = require("../utils/searchFeatures");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary = require("cloudinary");
const path = require("path");
const fs = require("fs");
const Service = require("../models/serviceModel");

// Get All Services with Search
exports.getAllServices = asyncErrorHandler(async (req, res, next) => {
  const resultPerPage = 12;
  const servicesCount = await Service.countDocuments();
  // console.log(req.query);

  const searchFeature = new SearchFeatures(Service.find(), req.query)
    .search()
    .filter();

  let services = await searchFeature.query;
  let filteredServicesCount = services.length;

  searchFeature.pagination(resultPerPage);

  services = await searchFeature.query.clone();

  res.status(200).json({
    success: true,
    services,
    servicesCount,
    resultPerPage,
    filteredServicesCount,
  });
});

// Get All Services ---Service Sliders
exports.getServices = asyncErrorHandler(async (req, res, next) => {
  const latitude = req.body.location.latitude;
  const longitude = req.body.location.longitude;

  const services = await Service.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [latitude, longitude] },
        distanceField: "dist.calculated",
        maxDistance: 1000000,
        spherical: true,
      },
    },
  ]);

  res.status(200).json({
    success: true,
    services,
  });
});

// Get Service Details
exports.getServiceDetails = asyncErrorHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    service,
  });
});

//Get All services of Logged --GURU
exports.myServices = asyncErrorHandler(async (req, res, next) => {
  const services = await Service.find({ user: req.user._id });
  if (!services) {
    return next(new ErrorHandler("Services Not Found", 404));
  }

  res.status(200).json({
    success: true,
    services,
  });
});

// Create Service ---GURU
exports.createService = asyncErrorHandler(async (req, res, next) => {
  const file = req.files.image;
  var fileName = file.name;
  const imageFilePath = path.join(__dirname, fileName);

  await file.mv(imageFilePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  });

  const myCloud = await cloudinary.v2.uploader.upload(imageFilePath, {
    folder: "services",
  });

  fs.unlink(__dirname + "/" + fileName, (err) => {
    if (err) {
      throw err;
    }
    console.log("Temporary file successfuly deleted");
  });

  req.body.user = req.user.id;

  const service = await Service.create({
    ...req.body,
    category: [req.body.serviceType],
    image: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    service,
  });
});

// Delete Service ---GURU
exports.deleteService = asyncErrorHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  // for (let i = 0; i < service.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(service.images[i].public_id);
  // }

  await serivce.remove();

  res.status(201).json({
    success: true,
  });
});
