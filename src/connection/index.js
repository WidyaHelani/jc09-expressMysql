const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user : 'widyadb',
        password: 'mysql123',
        host: 'db4free.net',
        database: 'widyadb',
        port: 3306
   
    }
)

module.exports = conn