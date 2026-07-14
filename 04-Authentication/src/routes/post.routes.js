const express = require('express');


const router = express.Router();

// Dumi router post mathod created!
router.post('/create', (req, res) => {
    console.log(req.body);

    console.log(req.cookies);

    res.send('Post created successFuylly!');
})

module.exports = router;