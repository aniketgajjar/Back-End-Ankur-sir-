const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model')

const router = express.Router();


// Dumi router post mathod created!
router.post('/create',async (req, res) => {
    const token = req.cookies.token;

    if(!token) {
            return res.status(401).json({
            message : "Unauthorized!"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await userModel.findOne({
            _id : decoded.id
        })

        console.log(user);

    } catch (err) {
        return res.status(401).json({
            message : "Token Is Invalid!"
        })
    }

    res.send('Post created successFully!');
})

module.exports = router;