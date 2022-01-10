const { body} = require('express-validator');


const RegesterSchema = [

     // username must be an email
     body('email').isEmail().withMessage('Email not Valid'),
     //
     body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i)
     .withMessage('A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required'),
     // role must be not null
     // body('role').notEmpty(),
]

module.exports = {RegesterSchema}
