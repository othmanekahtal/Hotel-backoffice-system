const mongoose = require('mongoose');
const { Schema } = mongoose;


const roomSchema = new Schema({
   roomNumber: String,
   price: Number,
   isReserved: { type: Boolean, default: false },
});

module.exports  = mongoose.model('Room', roomSchema)