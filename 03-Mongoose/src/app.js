// Ye file app.js ko import karegi aur server ko start karegi.
const express = require('express');
const app = express();
app.use(express.json());



module.exports = app;