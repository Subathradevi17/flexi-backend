module.exports = (app) => {
  const product = require("../controller/product.ctrl");

  var router = require("express").Router();

  router.post("/create", product.create);
  router.get("/fetch", product.fetch);
  router.put("/update/:id", product.update);
  router.delete("/delete/:id", product.delete);
  app.use("/api/product", router);
};
