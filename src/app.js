//initialise express
const express = require('express');
const app = express();

//setup routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});