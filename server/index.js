const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const mysql_conn_data = {
  host: "localhost",
  port: 8889,
  database: "nodejs_53414",
  user: "root",
  password: "root",
  //   socket: "/Applications/MAMP/tmp/mysql/mysql.sock",
};

const connection = mysql.createConnection(mysql_conn_data);
// const connection = mysql.createConnection({
//   port: 8889,
//   host: "localhost",`
//   database: "nodejs_53414",
//   user: "root",
//   password: "root",
//   //   socket: "/Applications/MAMP/tmp/mysql/mysql.sock",
// });

connection.connect(function (error) {
  if (error) {
    console.log("Error de conexion", error.stack);
    return;
  }
  console.log("conectado", connection.threadId);
});

app.get("/", (req, res) => {
  res.send("This is express running");
});

// CREATE
app.get("/create", (req, res) => {
  let sql = "INSERT INTO `nodejs_53414`.`usuarios` (`nombre`, `contrasegna`, `activo`, `fecha_hora_crea`) VALUES ('N  N', '890', '1', '2021-11-13 15:40');";
  connection.query(sql, function (error, results, fields) {
    if (error) {
      throw error;
    }
    console.log(results, fields);
    res.send("consulta exitosa");
  });
});

// READ
app.get("/usuarios", (req, res) => {
  let sql = "SELECT * FROM  usuarios";
  connection.query(sql, function (error, results, fields) {
    if (error) {
      throw error;
    }

    results.forEach((element) => {
      console.log(`id: ${element.id} nombre: ${element.nombre}`);
    });
    res.send("consulta exitosa");
  });
});
app.listen(port, () => console.log("listening port 3000..."));
