const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const port = 4001;
const app = express();
const db = require('../db/index.js')
const connection = db.connection;

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/words', ()=> {
  //get currently added items from db and return them 
});

app.post('/sendWords', ()=> {
  //add new item to list 
});

app.listen(port, ()=> {
  console.log(`Server listening on port: ${port}`);
});
