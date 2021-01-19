const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sandbox',
    password: '',
    port: 3306
});

module.exports = pool.promise();