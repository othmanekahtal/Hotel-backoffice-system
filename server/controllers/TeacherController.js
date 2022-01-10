require('dotenv').config();
const bcrypt = require("bcryptjs");

const { QueryTypes } = require('sequelize');
const db = require('../models');


module.exports={
        

    getAll: async (req, res) => {

        // Find all teachers

      const teachers =  await db.Teacher.findAll()
        .then((teachers) => {
            res.status(200).json({teachers})
        }).catch((err) =>{
            res.status(404).json({message : "Not Found"})
        }) 


    },

    getOne: async (req, res) => {

        const {id} = req.params


        await db.Teacher.findByPk(id)
         
        // await db.Teacher.findOne({ where: { id } })     
  
        .then((teacher) => {
          if (!teacher)  return res.status(404).send({ message: `Teacher not found with id  ${id} `})
          res.status(200).send({teacher})
      })
      .catch((err) =>{
          console.log(err)
          res.status(404).send({message : "bad request"})
      }) 
  
    },

    Post: async (req, res) => {

    const {firstName,lastName } = req.body;

    const userId = req.user.user_id

    await db.Teacher.create({  firstName,  lastName , userId })

     .then((teacher) => {
          res.status(200).send({teacher})
      }).catch((err) =>{
          res.status(404).send({message : "bad request"})
          console.log(err)
      })  
    },

    Update: async (req, res) => {},

    Delete: async (req, res) => {
        
      const {id} = req.params
      
      const teacher =  await db.Teacher.findOne({ where: { id } })

      if (!teacher)  return res.status(404).send({ message: `Teacher not found with id  ${id} `});
      
       await db.Teacher.destroy({
        where: {
            id: id
        }
      })

      .then(async() => {

        res.status(200).send({message : "teacher deleted"})
    }).catch((err) =>{
        res.status(404).send({message : "bad request"})
        
    }) 

     
}
}