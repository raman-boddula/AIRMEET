const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

const productController = require("./controller/product.controller");

app.use("/products", productController);

module.exports = app;
