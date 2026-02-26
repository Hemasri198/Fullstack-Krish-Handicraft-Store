const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'hema sri 198',
    database: 'mydata',
});
module.exports = pool.promise();