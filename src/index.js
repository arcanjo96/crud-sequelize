const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(3336);