const { Schema,  model } = require('mongoose');

 const flightSchema = new Schema({
    airline: { type: String, enum: ['America', 'Southwest', 'United'] , required: true },
    flightNo: { type: Number, min: 10,  max: 9999 },
    departs: { type:  Date }
 });

 const Flight = model('Flight', flightSchema);

 module.exports = Flight;