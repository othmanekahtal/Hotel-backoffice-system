const express = require('express');
const router = express();
const customer  = require('../routes/api/CustomerRoutes');
const rooms = require('../routes/api/RoomsRoutes');
const reservation = require('../routes/api/ReservationRoutes')
// const { availableRooms, bookedRooms, bookingRoom, reservation } = require('../controllers/Controller')


router.use("/customers/", customer)
router.use("/rooms/", rooms)
router.use("/reservation", reservation)

// router.get("/", availableRooms) //return available rooms 
// router.get("/booked", bookedRooms) //return booked rooms
// router.post("/booking", bookingRoom)


module.exports = router