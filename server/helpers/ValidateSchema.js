const { checkSchema } = require('express-validator');

const authSchema =   checkSchema({    
    firstName: {
        isLength: {
            errorMessage: 'lastname should be at least 5 chars long',
            // Multiple options would be expressed as an array
            options: { min: 5 },
          },
    },
    lastName: {
        isLength: {
          errorMessage: 'lastname should be at least 5 chars long',
          // Multiple options would be expressed as an array
          options: { min: 5 },
        },
      },
    // Support bail functionality in schemas
    email: {
      isEmail: {
        bail: true,
      },
    },
  })

module.exports = {authSchema}



