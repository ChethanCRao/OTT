const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Importing your database connection from "./db/conn"
require("./db/conn");

// Importing your models
const banner = require("./model/BannerSchema");
const horror = require("./model/horror.schema");
const scific = require("./model/scific.schema");
const trending = require("./model/trending.schema");

app.get("/banner", (req, res) => {
  // You should query the "banner" model, not "banner.find({})"
  banner.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/trending", (req, res) => {
  // Assuming you meant to query the "trending" model
  trending.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/horror", (req, res) => {
  // Assuming you meant to query the "horror" model
  horror.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/scific", (req, res) => {
  // Assuming you meant to query the "scific" model
  scific.find({}).then((result) => {
    res.send(result);
  });
});

const port = process.env.PORT || 5000; // Use 5000 as a default if PORT is not defined
app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
