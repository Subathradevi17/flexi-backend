module.exports = (app) => {
  const employee = require("../controller/employee.ctrl");

  var router = require("express").Router();

  router.post("/create", employee.create);
  router.get("/fetch", employee.fetch);
  router.put("/update/:id", employee.update);
  router.delete("/delete/:id", employee.delete);
  app.use("/api/employee", router);
};
