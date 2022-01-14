const { addRoom } = require("./../Controllers/roomController");
const express = require("express");
const { protect } = require("./../middleware/protectRoute");
const router = express.Router();
router.route("/room/add").post(protect, addRoom);
module.exports = router;
