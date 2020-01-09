const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  const result = parseFloat(req.body.num1) + parseFloat(req.body.num2);

  res.send(`Result: ${result}`);
});

const port = 3000;

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});