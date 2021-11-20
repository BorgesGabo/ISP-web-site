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
  multipleStatements: true,
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
    console.log("Error in connection", error.stack);
    return;
  }
  console.log("connected, connection threadID: ", connection.threadId);
});

app.get("/", (req, res) => {
  res.json({
    greeting: "this is /",
  });
});

// Get all users
app.get("/usuarios", (req, res) => {
  let sql = "SELECT * FROM  usuarios";
  connection.query(sql, function (error, results, fields) {
    if (error) {
      throw error;
    }

    results.forEach((element) => {
      console.log(`id: ${element.id} nombre: ${element.nombre}`);
    });
    res.json({
      greeting: "successful query",
    });
    // res.send("consulta exitosa");
  });
});

// Get an user
app.get("/usuarios/:id", (req, res) => {
  let sql = "SELECT * FROM  usuarios WHERE id=?";
  connection.query(sql, [req.params.id], function (error, results, fields) {
    if (error) {
      throw error;
    }

    results.forEach((element) => {
      console.log(`id: ${element.id} nombre: ${element.nombre}`);
    });

    res.json({
      greeting: "successful query",
      id: results[0].id,
      nombre: results[0].nombre,
      contrasegna: results[0].contrasegna,
      isActivo: results[0].activo,
      fecha_creacion: results[0].fecha_hora_crea,
    });
  });
});

// Delete an user
app.delete("/usuarios/:id", (req, res) => {
  let sql = "DELETE FROM  usuarios WHERE id=?";
  connection.query(sql, [req.params.id], function (error, results, fields) {
    if (error) {
      throw error;
    }

    console.log(`the user with the id: ${req.params.id} was successfully deleted`);
    res.json({
      greeting: "successfully deleted",
      id: req.params.id,
    });
  });
});

//post an user
app.post("/usuarios", (req, res) => {
  //   let id = [req.body.id];
  //   let name = [req.body.nombre];
  //   let password = [req.body.contrasegna];
  //   let isActive = [req.body.activo];
  //   let fecha = [req.body.fecha];
  //   let sql2 = `VALUES (${id}, ${name}, ${password}, ${isActive}, ${fecha})`;
  let us = req.body;
  let sql3 = "SET @id = ?; SET @name = ?; SET @password = ?; SET @isActive = ?, SET @fecha = ?; \
  CALL usuarioAddOrEdit(@id, @name, @password, @isActive, @fecha)";

  //   let sql = "INSERT INTO `usuarios` (`id`, `nombre`, `contrasegna`, `activo`, `fecha_hora_crea`)";
  //   sql += sql2;
  connection.query(sql3, [us.id, us.name, us.password, us.isActive, us.fecha], function (error, results, fields) {
    if (error) {
      throw error;
    }
    res.json({
      greeting: "successfully added",
    });
  });
});

app.listen(port, () => console.log("listening port 3000..."));
