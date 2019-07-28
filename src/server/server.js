const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const args = process.argv.slice(2);
const isDevelopment = args[0] === 'dev';

const PORT = isDevelopment ? 3001 : 80;

const app = express();

app.use(function(req, res, next) {
  if (isDevelopment) {
    res.header('Access-Control-Allow-Origin', '*');
  }
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Token'
  );
  next();
});

app.use(function(req, res, next) {
  // Disable caching for content files
  // res.header("Max-Age", 0);
  // res.header('Last-Modified', (new Date()).toString());
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', 0);
  res.header('Pragma', 'no-cache');
  next();
});

if (!isDevelopment) {
  app.use(express.static(path.resolve(__dirname, '../../build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../build/index.html'));
});

app.use(bodyParser.json()); // for parsing application/json

app.get('/dictionary', (req, res) => {
  res.send({
    locale: 'en-EN',
    messages: {
      counter: 'Counter',
      clickMe: 'Click Me',
      multipliedValue: 'Multiplied Value'
    }
  });
});

app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
