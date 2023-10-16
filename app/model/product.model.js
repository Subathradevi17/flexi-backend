const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: Number,
    productName: String,
    category: String,
    price: String,
    desc: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
