const mongoose = require("mongoose");
const { Schema } = mongoose;
const roomSchema = new Schema({
  serial: {
    type: String,
    required: [true, "A room must have a serial"],
    trim: true,
    maxlength: [10, "A serial must have less or equal then 10 characters"],
    minlength: [1, "A serial must have more or equal then character"],
  },
  type: {
    type: String,
    required: [true, "room must have a type"],
    enum: {
      values: ["type1", "type2"],
      message: "type is either: type1, type2",
    },
  },
  price: {
    type: Number,
    required:required: [true, "A room must have a price"],
  },
});
module.exports = mongoose.model("room", roomSchema);
