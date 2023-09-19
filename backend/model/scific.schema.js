const mongoose = require("mongoose");

const scificSchema = mongoose.Schema({
  imageurl: [
    {
      type: String,
      required: true,
    },
  ],
  genre: {
    type: String,
    required: true,
  },
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
  imdbid: {
    type: Number,
    required: true,
  },
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
  type: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});

const ScificModel = new mongoose.model("scific", scificSchema);

module.exports = ScificModel;
