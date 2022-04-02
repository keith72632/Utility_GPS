const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

// sendFile will go here
const mapRouter = require('./routes/map');

app.use('/map', mapRouter);

app.listen(port);
console.log('Server started at http://localhost:' + port);