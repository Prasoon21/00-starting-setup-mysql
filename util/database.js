const mysql = require('mysql2');

mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Timely19@kang'
});

module.exports = pool.promise();