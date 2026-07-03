// Servdr ko Create Karan!
const express = require('express');

const app = express();

// Create Notes!
const notes = [];
// Jo Data aa Raha hai usko User read nahi kar sakta is liye Data ko JSON() format main conver karna padta hai!
app.use(express.json());

// POST /notes!
app.post('/notes', (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message : "Note Create SuccessFully!"
    });
});

// GET /notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message : "Notes Fetch SuccessFully!",
        notes : notes
    });
});

// DELETE /notes/: index[0, 1, 2, 3, .... n]
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;

    delete notes[ index ];

    res.status(200).json({
        message : "Note Deleted SuccessFully!"
    });
});

// PATCH /notes/: index[0, 1, 2, 3, 4, ...., n] Update karne ke liye!

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const description = req.body.description;
    // Update Description!
    notes [index].description = description;

    res.status(200).json({
        message : "Note Updated SuccessFUlly!"
    });

})

module.exports = app;