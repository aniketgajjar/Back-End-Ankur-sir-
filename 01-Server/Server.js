const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('Server is Running...!');
});

app.get('/About', (req, res) => {
    res.send('About Page!');
});

app.get('/Home', (req, res) => {
    res.send('Home Page!');
});

app.get('/Contact', (req, res) => {
    res.send('Contact US Page!');
});

app.get('/Product', (req, res) => {
    res.send('Pruduct Page!');
});


app.listen(3000);