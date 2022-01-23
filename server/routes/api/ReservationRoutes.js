const express = require('express');
const reservation = express();
const { index, show, store, destroy, update , BookRoom } = require('../../controllers/ReservationController');

reservation.get('/', index);
reservation.get('/:id', show);
reservation.post('/', store);
reservation.delete('/:id', destroy);
reservation.put('/:id', update)
reservation.put('/bookroom/:id', BookRoom)

module.exports = reservation