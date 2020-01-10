/* eslint-disable nonblock-statement-body-position */
const router = require("express").Router();
const Sequelize = require("sequelize");
// router.use("/customers", require("./customers"));
// router.use("/products", require("./products"));
// router.use("/orders", require("./orders"));
console.log("entered /api");
// router.use("/weather", require("./weather"));

const { Product } = require("../db/product");

router.get("/allProducts", async (req, res, next) => {
  res.send("HELLO");
});

router.use(function(req, res, next) {
  console.log("next error", next);
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
