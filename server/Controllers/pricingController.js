const AsyncCatch = require("../utils/asyncCatch");
const pricingModel = require("../models/pricingModel");
const ErrorHandler = require("./../utils/errorHandler");
exports.addPrice = AsyncCatch(async (req, res, next) => {
  const price = req.body?.price;
  if (!price)
    return next(
      new ErrorHandler({ statusCode: 400, message: "all fields are required!" })
    );
  const response = await pricingModel.create({ price });
  res.status(201).json({
    status: "success",
    data: response,
  });
});
