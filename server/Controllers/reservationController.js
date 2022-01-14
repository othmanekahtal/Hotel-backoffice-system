const AsyncCatch = require("../utils/asyncCatch");
const reservationModel = require("../models/reservationModel");
const ErrorHandler = require("./../utils/errorHandler");
exports.addReservation = AsyncCatch(async (req, res, next) => {
  const reservation = req.body;
  console.log(reservation);
});
