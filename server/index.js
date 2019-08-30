const express = require('express');
const bodyParser = require('body-parser');

const createMiniBlog = require('../database-mysql').createMiniBlog;
const fetchParks = require('../database-mysql').fetchParks;
const db = require('../database-mysql');
const app = express();
const PORT = 3001;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../public'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, application/json');
  next();
})


app.get('/parks', (req, res) => {
  console.log('here')
  fetchParks((err, data) => {
    if(err) {
      res.sendStatus(500).send(err)
        return;
      }
      res.json(data);
    })
})

app.post('/miniBlogs', (req, res) => {
  const { title, content, parkId, userId } = req.body

  console.log(title, content, typeof parkId, typeof userId)
  createMiniBlog(title, content, parkId, userId, (err, data) => {
    if(err) {
      return; 
    }
    res.sendStatus(201);
  })

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})