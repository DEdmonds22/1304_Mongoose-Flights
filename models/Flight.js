const { Schema,  model } = require('mongoose');

const flightSchema = new Schema({
   airline: { type: String, enum: ['America', 'Southwest', 'United'] , required: true },
   flightNo: { type: Number, min: 10,  max: 9999 },
   departs: { type:  Date, default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
});

const Flight = model('Flight', flightSchema);

module.exports = Flight;