const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
const connectDB = require("./config/db.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: ["https//localhost:3000"], credentials: true }));

const PORT = process.env.PORT || 8000;

connectDB();
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("I'm Working!!");
});
