var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let urlRoute = require('./Routes/url-route');
var cors = require('cors');

app.listen(4000, ()=>{
    console.log("Server is listening on port 4000")
});

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use('/urlRoute',urlRoute);