const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('../api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', api);

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
    console.log(err);
});

module.exports = app;