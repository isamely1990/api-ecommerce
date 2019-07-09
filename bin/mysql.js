var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'meli_db',
    password: '123456',
    database: 'php_carrito',
    port: 3306
 });
 connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conectada a la DB.');
    }
 });

 module.exports = connection; 