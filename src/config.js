require('./database/index');
const express = require('express');
const cors = require('cors');
const app = express()

app.set('port', process.env.PORT || 5000)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

module.exports = app