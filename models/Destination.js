const { Schema, model } = require('mongoose');

const destinationSchema = new Schema({
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'] },
    arrival: { type: Date }
});

const Destination = model('Destination', destinationSchema);

module.exports = Destination;