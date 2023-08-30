require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");


mongoose.connect(process.env.DB,)

app.use(cors());

// database connection
require("./db/conn");
const banner = require("./model/BannerSchema");
const horror = require("./model/horror.schema");
const scific = require("./model/scific.schema");
const trending = require("./model/trending.schema");

app.get("/banner", (req, res) => {
  banner.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/trending", (req, res) => {
  trending.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/horror", (req, res) => {
  horror.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/scific", (req, res) => {
  scific.find({}).then((result) => {
    res.send(result);
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
