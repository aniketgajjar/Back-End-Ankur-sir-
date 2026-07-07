// Ye file app.js ko import karegi aur server ko start karegi.
const express = require('express');
const noteModel = require('./model/note.model');
const app = express();
// jab tak aap ye use nai karte tab tak req.body mein data nahi aayega!
app.use(express.json());

// POST /notes

app.post('/notes', async (req, res) => {
    
    const data = req.body;

    await noteModel.create({

        title: data.title,
        description: data.description
    });

    res.status(201).json({
        message: "Note Created!"
    });
});

// GET /notes

app.get('/notes', async (req, res) => {

    const notes = await noteModel.find(); // return array fo object! agar data exist nai karta to NULL ke form mein array of object return karta hai!

    // const notes = await noteModel.findOne({
    //     title : "test_title"
    // }) // object ke form mein data show karta hai! or Data exist nai karta to NULL return karta hai!

    // --- find() - [{}, {}, ...] or []
    // --- findOne() - {} or NULL

    res.status(200).json({
        message: "Notes fetched successfully!",
        notes: notes
    });
});

// DELETE /notes:id

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id;


    // --- findOneAndDelete() - ye function 1 argument leta hai. Pehla argument mein hum query likhte hain ki kaunsa data delete karna hai.     

    await noteModel.findOneAndDelete({
        _id : id // MongoDB ke databae mein id ko '_id' ke form mein likha jaata hai is liye...
    });

    res.status(200).json({
        message : "Note Deleted SuccessFully!"
    });
});


// PATCH /notes:id

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;

    // --- findOneAndUpdate() - ye function 2 argument leta hai. Pehla argument mein hum query likhte hain ki kaunsa data update karna hai aur dusra argument mein hum update karne ke liye data likhte hain.

    await noteModel.findOneAndUpdate({
        _id : id
    }, {
        description : description
    });

    res.status(200).json({
        message : "Note Updated SuccessFully!"
    });
});



module.exports = app;