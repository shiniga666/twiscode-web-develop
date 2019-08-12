/* eslint-disable no-console */
const express = require('express');

const app = express();
const cors = require('cors');
const path = require('path');

const port = 8443;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static(`${__dirname}/dist`));
app.use(express.static(__dirname, +'public'));
app.use(express.static('/'));
const root = path.resolve(__dirname, 'dist', 'index.html');

app.get('*', function(req, res) {
  res.sendFile(root);
});

app.listen(port);
console.log('Server started');
