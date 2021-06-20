const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Send normal respone
    res.send('YOUR RESPONE')

    // Send file like html or an image
    // res.sendFile('route/to/the/file')

    // Send json as an response
    // res.json('response in json')
})

module.exports = router