const { addReservation } = require("./../Controllers/reservationController");
const express = require("express");
const router = express.Router();
router.route("/reservation/add").post(addReservation);
module.exports = router;
