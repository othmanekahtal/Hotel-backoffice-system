const Customer = require('../models/Customer')
const Reservation = require('../models/Reservation')
const sendEmail = require('../utils/mail')

const index = (req, res) => {
    Reservation.find().then((result) => {
        if(result.length > 0){
            res.status(200).json(result)
        }else{
            res.status(204).json("No Reservation Found")
        }
    }).catch((err) => {
        res.json(err)
    })
}

const show = async (req, res) => {
    let id = req.params.id;
    try {
        const result = await Reservation.findById(id)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

const store = async (req, res) => {
    const roomData =  {...req.body}

    try {
        const result = await  Reservation.insertMany(roomData);
        res.status(200).json({message: "Store Succes" , result })
        
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const destroy = async (req, res) => {
    const { id } = req.params
    const record = { _id: id }
    try {
        const result = await Reservation.deleteOne(record)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}
const update = async (req, res) =>  {
    const { id } = req.params
    const record = { _id: id }
    const updatedData =  {...req.body}
    try {
        const result = await Reservation.updateOne(record, updatedData)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

const BookRoom = async (req, res) =>  {
    const reservationID = req.params.id
    const customerID = req.body.customerID

    try {
        
        const user = await Customer.findById({_id:customerID})
        
        const result = await Reservation.findByIdAndUpdate({_id: reservationID}, {
            $set:{
                isReserved : true
            }
        })
        await sendEmail(user.email , result.roomID)
        
        res.status(200).json({ email: user.email , room: result.roomID})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}



module.exports =  {
    index,
    show,
    store,
    destroy,
    update,
    BookRoom
}