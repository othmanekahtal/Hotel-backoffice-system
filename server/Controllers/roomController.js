const AsyncCatch = require("../utils/asyncCatch");
const roomModel = require("../models/roomModel");
const pricingModel = require("../models/pricingModel");

const ErrorHandler = require("./../utils/errorHandler");

exports.addRoom = AsyncCatch(async (req, res, next) => {
  const { serial, type, price } = req.body;
  if (!serial && !type && !price)
    return next(
      new ErrorHandler({ statusCode: 400, message: "all fields are required!" })
    );
  const price_is_exist_in_db = await pricingModel.findById(price);
  console.log(price_is_exist_in_db);
  if (!price_is_exist_in_db)
    return next(
      new ErrorHandler({
        statusCode: 400,
        message: "price not exist in system !",
      })
    );
  let response = await roomModel.create({ serial, type, price });
  response.price = price_is_exist_in_db;

  res.status(201).json({
    status: "success",
    data: response,
  });
});

// todo:serial will be unique
