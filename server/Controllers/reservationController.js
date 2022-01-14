const AsyncCatch = require("../utils/asyncCatch");
const reservationModel = require("../models/reservationModel");
const ErrorHandler = require("./../utils/errorHandler");
exports.addReservation = AsyncCatch(async (req, res, next) => {
  const { client, room, checkIn, checkOut } = req.body;
  console.log({ client, room, checkIn, checkOut });
  if (!room && !client && !checkIn && !checkOut)
    return next(
      new ErrorHandler({ statusCode: 400, message: "all fields are required!" })
    );
  const response = await reservationModel.create({
    client,
    room,
    checkIn,
    checkOut,
  });
  res.status(201).json({
    status: "success",
    data: response,
  });
});
