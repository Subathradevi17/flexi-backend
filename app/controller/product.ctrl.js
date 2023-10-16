const Product = require("../model/product.model");

exports.create = (req, res) => {
  const { productId, productName, category, price, desc } = req.body;
  const product = new Product({
    productId: productId,
    productName: productName,
    category: category,
    price: price,
    desc: desc,
  });

  product
    .save(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};
