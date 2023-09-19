const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

const BannerModel = new mongoose.model("banner", bannerSchema);

module.exports = BannerModel;
