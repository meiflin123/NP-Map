const mysql = require ('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.log('problem connecting to mysql', err);
    return;
  }
  console.log('connected to mysql');
});


const createMiniBlog = (title, content, parkId, userId, callback) => {
  const query = 'INSERT INTO miniBlogs(title, content, park_id, user_id) VALUES(?, ?, ?, ?)';

  connection.query(query, [title, content, parkId, userId], callback);

}

const fetchParks = (callback) => {
  connection.query('SELECT * FROM PARKS', (err, data) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
}


module.exports = {
  createMiniBlog,
  fetchParks
}