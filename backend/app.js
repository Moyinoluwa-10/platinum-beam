require("express-async-errors");

// express
const express = require("express");
const app = express();

// other packages
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

// middlewares
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

// routes
const formRoutes = require("./routes/form.routes");

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get("/", (req, res) => {
  res.send("<h1>Platinum Beam API</h1>");
});

// routes
app.use("/api/v1/", formRoutes);

// other middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
