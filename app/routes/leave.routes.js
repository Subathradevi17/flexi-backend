module.exports = (app) => {
  const leave = require("../controller/leave.ctrl");
  var router = require("express").Router();
  router.post("/create", leave.create);
  app.use("/api/leave", router);
};
