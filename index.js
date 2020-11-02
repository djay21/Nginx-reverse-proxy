// Dependencies
const express = require('express');

// Configure & Run the http server
const app = express();

app.get('/.well-known/acme-challenge/:filename', function (req, res) {
  const fs = require('fs')
  fs.readFile(req.params.filename+'.txt', 'utf8', function (err, data) {
    if (err) throw err;
    res.send(data);
  });

})

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});

