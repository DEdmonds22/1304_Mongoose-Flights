require('dotenv').config();
const express = require('express');
const app = express();
const Flight = require('./models/Flight');
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

app.use(express.urlencoded({extended: true}));
mongoose.connect(mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// INDEX
app.get('/', ( req, res ) => {
    res.send('Home Page Tester');
});

app.get('/flights', ( req, res ) => {
    Flight.find({})
        .then(allFlights => {
            res.render('Index', { flights: allFlights });
        })
        .catch(error => {
            console.error(error);
        })
});

// NEW
app.get('/flights/new', ( req, res ) => {
    res.render('New');
});

// DELETE


// UPDATE


// CREATE
app.post('/flights', ( req, res ) => {
    if (!req.body.departs) {
        const currentDateTime = new Date();
        // v set the new year while keeping the rest of the date and time
        const oneYearFromNow = new Date(currentDateTime);
        oneYearFromNow.setFullYear(currentDateTime.getFullYear() + 1);
        // v adjust for local time zone offset
        const localOffset = currentDateTime.getTimezoneOffset();
        oneYearFromNow.setMinutes(oneYearFromNow.getMinutes() - localOffset);
        // v format the adjusted date and time
        const formattedDateTime = oneYearFromNow.toISOString().slice(0, 16);
        req.body.departs = formattedDateTime;
    }
    Flight.create(req.body)
        .then(addedFlight => {
            res.redirect('/flights');
        })
        .catch(error => {
            console.error(error);
        })
})

// EDIT


// SHOW
app.get('/flights/:id', (req, res) => {
    const id = req.params.id;
    Flight.findOne({_id: id})
        .then(selectedFlight => {
            console.log(selectedFlight)
            res.render('Show', {flight: selectedFlight})
        })
})

app.listen(3000, () => {
    console.log('listening');
});