const mongoose = require("mongoose");
const { Schema } = mongoose;
const priceModel = new Schema({
    price:{
        type: Number,
        required:required: [true, "A room must have a price"],
    }
});
module.exports = mongoose.model("price", priceModel);
