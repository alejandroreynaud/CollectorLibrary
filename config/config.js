require("dotenv").config();

const{ DB_Host, DB_UserName, DB_Password, DB_Dialect, DB_DataBase} = process.env;



module.exports = {
  development: {
    username: DB_UserName,
    password: DB_Password,
    database: DB_DataBase, 
    host: DB_Host,
    dialect: DB_Dialect
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
