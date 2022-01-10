require('dotenv').config();
const bcrypt = require("bcryptjs");

const { QueryTypes } = require('sequelize');
const db = require('../models');



const {validationResult } = require('express-validator');




module.exports={
        

    getAll: async (req, res) => {

        // Find all users

      const students =  await db.Student.findAll()
        .then((students) => {
            res.status(200).json({students})
        }).catch((err) =>{
            res.status(404).json({message : "Not Found"})
        }) 


    },

    getOne: async (req, res) => {

      const {id} = req.params


      await db.Student.findByPk(id)      
      
      // const student =  await db.Student.findOne({ where: { id: id } })
    

      .then(async(student) => {
        if (!student)  return res.status(404).send({ message: `Student not found with id  ${id} `})

        res.status(200).send({student})
    }).catch((err) =>{
        res.status(404).send({message : "bad request"})
    }) 




    },

    Post: async (req, res) => {

    const { email ,password ,role ,firstName,lastName } = req.body;

    const emailExist = await db.User.findOne({ where: { email: email } });

      if(emailExist){
        res.status(400).send({
          message : "email already exists"
        })
        return
      }

      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const hasdPsw = await bcrypt.hash(password, 12);
      const user = await db.User.create({
            email: email,
            password: hasdPsw,
            role: 'student'
        
      })

      const students = await db.Student.create({ firstName: firstName, lastName: lastName ,userId : user.id })

    //   , teacherId 

    
      .then((students) => {
          res.status(200).json({students})
      }).catch((err) =>{
          res.status(404).json({message : "bad request"})
          
      }) 

    //    if (!students) return res.sendStatus(404)

        
      
    },

    Update: async (req, res) => {},

    Delete: async (req, res) => {
        
      const {id} = req.params
      
      const student =  await db.Student.findOne({ where: { id: id } })

      if (!student)  return res.status(404).send({ message: `Student not found with id  ${id} `});
      
       await db.Student.destroy({
        where: {
            id: id
        }
      })

      .then(async() => {

        await db.User.destroy({
          where: {
              id: await student.userId
          }
        })

        res.status(200).send({message : "student deleted"})
    }).catch((err) =>{
        res.status(404).send({message : "bad request"})
    }) 

     
}
}