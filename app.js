const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

const apiProductRouter = require("./api/routes/product.route");
const apiFeaturedProductRouter = require("./api/routes/featuredProduct.route");
const apiLastedProductRouter = require("./api/routes/lastedProduct.route");
const apiAuthRouter = require("./api/routes/auth.route");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected!");
});

app.use(bodyParser.json());
app.use("/api/products", apiProductRouter);
app.use("/api/featuredProducts", apiFeaturedProductRouter);
app.use("/api/lastedProducts", apiLastedProductRouter);
app.use("/api", apiAuthRouter);
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.listen(process.env.PORT || 8100);
