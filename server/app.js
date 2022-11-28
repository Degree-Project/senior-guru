const express = require("express");
// const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error.js");

// route imports
const user = require("./routes/userRoute");
const service = require("./routes/serviceRoute");
const reservation = require("./routes/reservationRoute");
const certificate = require("./routes/certificateRoute");


const app = express();

// configs
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());
app.use(cors({ origin: ["https://localhost:3000"], credentials: true }));

// routes
app.use("/api", user);
app.use("/api", service);
app.use("/api", reservation);
app.use("/api", certificate);

app.get("/", (req, res) => {
  res.send("I'm Working!!");
});

// error middleware
app.use(errorMiddleware);

module.exports = app;
