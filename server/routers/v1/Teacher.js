const express = require("express");
const router = express.Router()
const {authonticateToken} = require("../../middleware/Auth")

const {RegesterSchema } = require('../../schema/RegesterSchema')
const Teacher = require('../../controllers/TeacherController')

// teacher endpoint

router.get("/teachers",authonticateToken ,Teacher.getAll);
router.get("/teachers/:id",authonticateToken ,Teacher.getOne);
router.post("/teachers",authonticateToken,RegesterSchema ,Teacher.Post);
router.put("/teachers/:id",authonticateToken ,Teacher.Update );
router.delete("/teachers/:id",authonticateToken ,Teacher.Delete);



module.exports = router