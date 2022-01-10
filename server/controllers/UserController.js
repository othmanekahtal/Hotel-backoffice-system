const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config();

// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const { QueryTypes } = require('sequelize');
const db = require('../models');


const {validationResult } = require('express-validator');





module.exports={


    Register: async (req, res) => {

      const {email, password, role } = req.body;

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
            role: 'teacher'
        
      })
      .then(async (user) =>{
        const emailToken = jwt.sign({user_id: user.id,email:  user.email},  process.env.EMAIL_TOKEN_SECRET ,{ expiresIn: '1h' } )

        const url = `http://localhost:${process.env.PORT}/api/v1/confirmation/${emailToken}`;

         // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({

            service: "hotmail",
            auth: {
              user: process.env.MAIL_USER, // generated ethereal user
              pass: process.env.MAIL_PASS // generated ethereal password
            },
          });

          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: `"Oussama APP" <${process.env.MAIL_USER}>`, // sender address
            to: `${user.email}`, // list of receivers
            subject: 'Confirm Email',
            text: "Email verification", // plain text body
            html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`,
          });

        res.status(200).send({
          user
        })

      } )
    },


    Confirm: async (req, res) => {


      const id = req.id

      const user = await db.User.findOne({ where: { id: id } });

      const userUpdate = await user.update({ confirmed: true })

      // res.status(200).send(userUpdate)

      res.redirect('http://localhost:8081/login')

    },

    Login: async (req, res) => {

      const { email, password } = req.body;

      const user = await db.User.findOne({ where: { email: email } });

    

      if (!user) {
        return res.sendStatus(403)
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) return res.sendStatus(403)



      if (!user.confirmed) return  res.status(400).send({ message : "Please confirm your email address"});
      

      const accessToken = jwt.sign({user_id: user.id, email},  process.env.ACCESS_TOKEN_SECRET ,{ expiresIn: '1d' } )

      res.json({
        accessToken: accessToken
      })
    },

    // Delete: async (req, res) => {},

    // Update: async (req, res) => {},

}