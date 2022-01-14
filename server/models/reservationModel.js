const mongoose = require("mongoose");
const { Schema } = mongoose;
const reservationSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: [true, "A reservation must have a client"],
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "room",
    required: [true, "A reservation must have a room"],
  },
  checkIn: {
    type: Date,
    required: [true, "A room must have a check in date"],
  },
  checkOut: {
    type: Date,
    required: [true, "A room must have a check out date"],
  },
});
// TODO: add validation here :
module.exports = mongoose.model("reservation", reservationSchema);
