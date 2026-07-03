// Servdr ko Create Karan!
const express = require('express');

const app = express();

// Create Notes!
const notes = [];
// Jo Data aa Raha hai usko User read nahi kar sakta is liye Data ko JSON() format main conver karna padta hai!
app.use(express.json());


app.post('/notes', (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message : "Note Create SuccessFully!"
    });
});

app.get('/notes', (req, res) => {
    res.status(200).json({
        message : "Notes Fetch SuccessFully!",
        notes : notes
    });
});

app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;

    delete notes[ index ];

    res.status(200).json({
        message : "Note Deleted SuccessFully!"
    });
});

module.exports = app;