const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'backadmin',
  password: 'gzb142680',
  database: 'backadmin'
});

db.query('select 1', (err, result) => {
  if (err) return console.log('err', err.message);
  console.log('ok', result);
})

module.exports = db;