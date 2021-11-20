const mysql = require("mysql");
const mysql_conn_data = {
  host: "localhost",
  port: 8889,
  database: "nodejs_53414",
  user: "root",
  password: "root",
  //   multipleStatements: true,
  //   socket: "/Applications/MAMP/tmp/mysql/mysql.sock",
};

const dbConn = mysql.createConnection(mysql_conn_data);
dbConn.connect(function (error) {
  if (error) {
    console.log("Error in connection", error.stack);
  }
  console.log("Database connected successfully, connection threadID: ", dbConn.threadId);
});

module.exports = dbConn;

// SQL code

//*********** SELECT THE DATABASE
// USE nodejs_53414;

//********* SELECT THE TABLE

// USE nodejs_53414;
// CREATE TABLE IF NOT EXISTS `users` (
// `id` BIGINT UNSIGNED AUTO_INCREMENT,
//   `first_name` VARCHAR(255) NOT NULL,
//   `last_name` VARCHAR(255) NOT NULL,
//   `email` VARCHAR(255) NOT NULL,
//   `password` VARCHAR(255) NOT NULL,
//   `status` TINYINT UNSIGNED DEFAULT 0,
//   `is_deleted` TINYINT UNSIGNED DEFAULT 0,
//   `created_at` DATETIME NOT NULL,
//   `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`))
// ENGINE = InnoDB;

//*********** POPULATE THE TABLE

// INSERT INTO `nodejs_53414`.`users` (`first_name`, `last_name`, `email`,`password`, `status`, `is_deleted`, `created_at`) VALUES ('John', 'Doe', 'johndoe@gmail.com', '1234567890', '1', '0', '2019-11-19 03:30:30');
// INSERT INTO `nodejs_53414`.`users` (`first_name`, `last_name`, `email`, `password`, `status`, `is_deleted`, `created_at`) VALUES ('Jane', 'Doe', 'janedoe@gmail.com', '9876543210',  '1', '0', '2019-11-19 03:35:30');
