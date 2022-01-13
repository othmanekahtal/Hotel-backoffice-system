const AsyncCatch = require("../utils/asyncCatch");
const ErrorHandler = require("./../utils/errorHandler");
const roomModel = require("../models/roomModel");

const addNewRoom = AsyncCatch(async (req, res, next) => {
    result  = roomModel.insertOne(req.body);
})

const updateRoom = AsyncCatch(async (req, res, next) => {
    
})

const deleteRoom = AsyncCatch(async (req, res, next) => {
    
})


module.exports = {
    addNewRoom,
    updateRoom,
    deleteRoom,
}