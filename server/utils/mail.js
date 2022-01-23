const nodemailer = require('nodemailer')

const sendEmail = async (email, room) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL, 
          pass: process.env.PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.EMAIL, // Sender address
        to: email, // List of recipients
        subject: 'Roome Reservation', // Subject line
        html: `
        <div>
            <h1>A room has been reserved for you</h1>
            <h4>Room Number: ${ room }</h4>
        </div>`
   };
   
   transporter.sendMail(mailOptions, function(err, info) {
       if (err) {
         console.log(err)
       } else {
         console.log(info);
         res.json(info)
       }
   });
}
module.exports = sendEmail