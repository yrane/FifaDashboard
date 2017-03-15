var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 1000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.post('/', function(req, res){
    console.log('POST /');
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('thanks');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
