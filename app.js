const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

const post = require('./post/post');


  
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/', post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});