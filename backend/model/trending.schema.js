const mongoose = require("mongoose");

const trendingSchema = mongoose.Schema({
  imageurl: [
    {
      type: String,
      required: true,
    },
  ],
  banner: {
    type: String,
    required: true,
  },
  videourl: [
    {
      type: String,
      required: true,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  imdbrating: {
    type: Number,
    required: true,
  },
  released: {
    type: Number,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const TrendingModel = new mongoose.model("trending", trendingSchema);

module.exports = TrendingModel;
