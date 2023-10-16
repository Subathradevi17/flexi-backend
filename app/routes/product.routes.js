module.exports = (app) => {
  const product = require("../controller/product.ctrl");

  var router = require("express").Router();

  router.post("/create", product.create);

  app.use("/api/product", router);
};
