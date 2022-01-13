const { addPrice } = require("./../Controllers/pricingController");
const { protect } = require("./../middleware/protectRoute");
const express = require("express");
const router = express.Router();
router.route("/add-price").post(protect, addPrice);
module.exports = router;
