const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: "String", required: true },
    first_name: { type: "String", required: true },
    images: { type: "String", required: true },
    bool: { type: "Boolean", required: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
