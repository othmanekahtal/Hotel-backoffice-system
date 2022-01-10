const express = require("express");
const router = express.Router()

const {authonticateToken} = require("../../middleware/Auth")

const Level = require('../../controllers/LevelController')


router.get("/levels",authonticateToken ,Level.getAll);
router.get("/levels/:id",authonticateToken ,Level.getOne);
router.post("/levels",authonticateToken, Level.Post);
router.put("/levels/:id",authonticateToken ,Level.Update );
router.delete("/levels/:id",authonticateToken ,Level.Delete);



  module.exports = router