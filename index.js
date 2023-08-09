const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// View engine setup
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});