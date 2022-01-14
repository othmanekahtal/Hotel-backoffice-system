const express = require("express");
const morgan = require("morgan");
const server = express();
const Auth = require("./Routes/authRoutes");
const reservationRoutes = require("./Routes/reservationRoutes");
const pricingRoutes = require("./Routes/pricingRoutes");
const roomRoutes = require("./Routes/roomRoutes");

const errorHandler = require("./utils/errorHandler");
const errorHandle = require("./Controllers/globalErrorHandler");
server.use(express.json());
// for dev only :
server.use(morgan("dev"));
server.use(express.static("public/"));
server.use("/api/v1", Auth, reservationRoutes, pricingRoutes, roomRoutes);

// if cycle not finished yet At this moment , we have a router that handled in the previous middlewares
/**
 * all == all verbs put,delete,patch,get,post
 */

server.all("*", function (req, res, next) {
  next(
    new errorHandler({
      message: `Can't find ${req.originalUrl} on this server`,
      statusCode: 404,
    })
  );
});

/*
we create a central middleware for handle all errors
 */
server.use(errorHandle);
/**
 * if we pass any parameter to next() function automatically express will know that was an error
 * when we pass param to next() express skip all middlewares in stack to the error handler
 */
module.exports = server;
