const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("products", productSchema);
