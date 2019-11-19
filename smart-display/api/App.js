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
    .then(response => res.json({success : response}));
    //.catch(err => res.json({success: false}));
});

app.get('/api/ring/isLoggedIn', function(req, res, next) {
    res.json({authenticated : ring.isAuthenticated()});
});

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
});