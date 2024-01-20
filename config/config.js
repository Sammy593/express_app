const mysql = require("mysql2");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host: "mysqldb",
  port: 3306,
  user: "root",
  password: "123456",
  database: "mvc_usuarios"
});