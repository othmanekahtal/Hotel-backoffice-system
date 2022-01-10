const {authonticateToken, verifyemailToken} = require("../../middleware/Auth");
const express = require("express");
const router = express.Router()



const {RegesterSchema } = require('../../schema/RegesterSchema');
const User = require('../../controllers/UserController')



router.post("/register",RegesterSchema, User.Register );
router.get("/confirmation/:token",verifyemailToken , User.Confirm );
router.post("/login", User.Login );



// router.get("/logout", User.Logout );



module.exports = router