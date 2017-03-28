var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

app.use('/save', express.static(__dirname));
app.use(bodyParser.json());
app.post('/save', function(req, res){
    console.log('POST /save');
    console.log(req.body);
    client.index({
     index: 'fifa17stats',
     type: 'gamestats',
     // id: '1',
     body: req.body
}, function (error, response) {

});
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('thanks');
});
