const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : '',
    database : 'booking_ticket',
    port: 3306
})
connection.connect((err) => {i
    if(err) throw err;
    console.log('Mysql database connected!')
})
//s
module.exports = connection;
