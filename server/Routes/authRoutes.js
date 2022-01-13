const { signup, login, addAdmin } = require("./../Controllers/authController");
const { protect } = require("./../middleware/protectRoute");
const express = require("express");
const router = express.Router();
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/add-admin").post(protect, addAdmin);

module.exports = router;
