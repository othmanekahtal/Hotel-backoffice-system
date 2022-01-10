const express = require("express");
const router = express.Router()

const {authonticateToken} = require("../../middleware/Auth")

const Subject = require('../../controllers/SubjectController')


router.get("/subjects",authonticateToken ,Subject.getAll);
router.get("/subjects/:id",authonticateToken ,Subject.getOne);
router.post("/subjects",authonticateToken, Subject.Post);
router.put("/subjects/:id",authonticateToken ,Subject.Update );
router.delete("/subjects/:id",authonticateToken ,Subject.Delete);



  module.exports = router