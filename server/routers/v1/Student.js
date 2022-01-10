const express = require("express");
const router = express.Router()
const {authonticateToken} = require("../../middleware/Auth")

const {RegesterSchema } = require('../../schema/RegesterSchema')
const Student = require('../../controllers/StudentController')


// student endpoint
router.get("/students",authonticateToken ,Student.getAll);
router.get("/students/:id",authonticateToken ,Student.getOne);
router.post("/students",authonticateToken,RegesterSchema ,Student.Post);
router.put("/students/:id",authonticateToken ,Student.Update );
router.delete("/students/:id",authonticateToken ,Student.Delete);




  module.exports = router