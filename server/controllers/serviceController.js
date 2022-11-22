const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const SearchFeatures = require('../utils/searchFeatures');
const ErrorHandler = require('../utils/errorHandler');
const cloudinary = require('cloudinary');
const Service = require('../models/serviceModel');

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
    const services = await Service.find();

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
        service
    });
});

// Create Product ---ADMIN
exports.createService = asyncErrorHandler(async (req, res, next) => {

    // let images = [];
    // if (typeof req.body.images === "string") {
    //     images.push(req.body.images);
    // } else {
    //     images = req.body.images;
    // }

    // const imagesLink = [];

    // for (let i = 0; i < images.length; i++) {
    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //         folder: "services",
    //     });

    //     imagesLink.push({
    //         public_id: result.public_id,
    //         url: result.secure_url,
    //     });
    // }
    
    // req.body.images = imagesLink;
    req.body.user = req.user.id;

    let specs = [];
    req.body.specifications.forEach((s) => {
        specs.push(JSON.parse(s))
    });
    req.body.specifications = specs;

    const service = await Service.create(req.body);

    res.status(201).json({
        success: true,
        service
    });
});


// Delete Product ---ADMIN
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
        success: true
    });
});