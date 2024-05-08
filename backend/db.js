const mongoose = require("mongoose");

const dbURI = process.env.DB_URL;

mongoose
  .connect(dbURI)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
