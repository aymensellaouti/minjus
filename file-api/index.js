const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path');
const cors = require('cors');

app.use(cors());

app.get('/file', function (req, res) {
    console.log('got request')
    const file = fs.readFileSync(path.join( __dirname, 'files', 'dummy.pdf'));
    res.blob(file);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
