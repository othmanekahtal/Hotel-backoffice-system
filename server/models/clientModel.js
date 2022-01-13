const mongoose = require("mongoose");
const { Schema } = mongoose;

// we need to getting schema class in mongoose:
const clientSchema = new Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

// error happens when we import function in another file
module.exports = mongoose.model("client", clientSchema);