const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ashutosh",
    database:"employeedata"
})
connection.connect((err)=>{
    if(err) throw err;
    console.log('Database is connected')
})
module.exports = connection;