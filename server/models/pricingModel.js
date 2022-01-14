const mongoose = require("mongoose");
const { Schema } = mongoose;
const priceModel = new Schema({
  price: {
    type: Number,
    required: [true, "A room must have a price"],
  },
});
module.exports = mongoose.model("Price", priceModel);
