const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : '',
    database : 'booking_ticket',
    port: 3306
})
connection.connect((err) => {
    if(err)  throw err;
    console.log('Done')
})
//s
module.exports = connection;
