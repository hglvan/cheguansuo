const express = require('express');
const path = require('path');

const app = express();

// app.get('/', function(req, res) {
//   res.send('hello world');
// });
app.use(express.static(path.join(__dirname, '/')));


app.listen(3333, function() {
  console.log('sucess');
});
