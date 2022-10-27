var express = require('express');
var bodyParser = require('body-parser');
var wkhtmltopdf = require('wkhtmltopdf');

var app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
  res.setHeader('content-type', 'application/pdf');
  var options = Object.assign({}, req.body.options, {"spawnOptions": {"shell": true}});
  console.log('Request config: ', JSON.stringify(options));
  console.log('Request content: ', JSON.stringify(req.body.content));
  wkhtmltopdf(req.body.content, options).pipe(res);
});

app.listen(8080, function () {
  console.log('App listening on port 8080');
});
