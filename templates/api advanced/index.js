const express = require('express');
const app = express();

const port = 8080;

app.use("/", require('./routes/hello.js'))

app.use("/your-route-here", require('./routes/your-route.js'))

app.listen(port, () => console.log('Server started on: ' + port))