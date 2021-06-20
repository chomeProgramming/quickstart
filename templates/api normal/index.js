const express = require('express');
const app = express();

const port = 8080 || process.env.Port;

app.get('/', (req, res) => {
    res.send('HELLO WORLD')
})

app.get('/your-route-here', (req, res) => {
    // Send normal respone
    // res.send('YOUR RESPONE')

    // Send file like html or an image
    // res.sendFile('route/to/the/file')

    // Send json as an response
    // res.json('response in json')
})

app.listen(port, () => console.log('Server started on: ' + port))