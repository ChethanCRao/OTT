const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection succesfull db");
  })
  .catch((err) => console.log("no connection"));
