const mongoose = require('mongoose');
const { Schema } = mongoose;


const reservationSchema = new Schema({
    customerID : String,
    roomID: String,
    checkIn: String,
    checkOut: String,
    isReserved: {
        type: Boolean , 
        default: false
    }
}, {
    timestamps: true
});

module.exports  = mongoose.model('Reservation', reservationSchema)