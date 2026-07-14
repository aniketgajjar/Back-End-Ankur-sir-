const express = require('express');
const authController = require('../controller/auth.controller');
const router = express.Router();


// Post /aip/auth/register !
router.post('/register', authController.registerUser);

router.get('/test', (req, res) => {
    console.log('Cookies', req.cookies);

    res.json({
        message : 'Test Router!',
        cookies : req.cookies
    });
});

module.exports = router; 