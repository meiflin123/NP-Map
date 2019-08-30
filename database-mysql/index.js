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


/*export const createMiniBlog = (parkId, callback) => {
  connection.query('INSERT into miniBlogs (park_id, content) VALUES (?, ?)')
}*/

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


  fetchParks
}