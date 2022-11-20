const dotenv = require("dotenv");
dotenv.config();
const app = require('./app');
const connectDB = require("./config/db.js");
const cloudinary = require('cloudinary');
const PORT = process.env.PORT || 8000;

// UncaughtException Error
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

connectDB();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
      process.exit(1);
  });
});
