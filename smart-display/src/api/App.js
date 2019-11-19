var express = require('express');
var axios = require('axios');
var ring = require('./modules/ring');
var cors = require('cors');
var bodyparser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyparser.json())

app.post('/api/ring/login', function (req, res, next) {
  ring.authenticate(axios, req.body.username, req.body.password)
    .then(response => res.json({success : true}))
    .catch(err => res.json({sucess: false, error: JSON.stringify(err)}));
});

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
});