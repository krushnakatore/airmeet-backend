const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    index: { type: "String", required: true },
    title: { type: "String", required: true },
    images: { type: "String", required: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
