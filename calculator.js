const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/', function(req, res) {
  const result = parseFloat(req.body.num1) + parseFloat(req.body.num2);

  res.send(`Result: ${result}`);
});

app.post('/bmicalculator', function(req, res) {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = weight / (height * height);

  res.send(`Your BMI is ${bmi}`);
});

const port = 3000;

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});