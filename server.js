const express = require('express')
const app = express()

app.get('/', function (req, res) {

  res.send('DerpyDev Bot Is Online')

});

app.listen(3000);