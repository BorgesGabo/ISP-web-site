const { json } = require("body-parser");
const { reset } = require("nodemon");
let dbConn = require("../../db.Config");

//User object create
let User = function (user) {
  // this.name = user.name;
  // this.password = user.password;
  // this.isActive = user.isActive;
  // this.createTimeStamp = user.createTimeStamp;

  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.email = user.email;
  this.password = user.password;
  this.status = user.status ? user.status : 1;
  this.is_deleted = user.is_deleted;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// TODO este metodo esta dos veces
User.create = function (newUser, result) {
  let sql = "INSERT INTO users set ?";
  dbConn.query(sql, newUser, function (err, res) {
    if (err) {
      console.log("error:", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

//Query to find ALL users
User.findAll = function (result) {
  let sql = "SELECT * from users";
  dbConn.query(sql, function (err, res) {
    if (err) {
      console.log("error in query: ", err);
      result(null, err);
    } else {
      console.log("fetching all users... they are: ", res);
      result(null, res);
    }
  });
};

// Query to find an user by ID
User.findOne = function (userId, result) {
  let sql = "SELECT * FROM users WHERE id = ?";
  dbConn.query(sql, userId, function (err, res) {
    if (err) {
      console.log("error in query: ", err);
      result(null, res);
    } else {
      console.log(`fetching the user with the id: ${userId}`, res);
      result(null, res);
    }
  });
};

// Query delete an user by ID
User.deleteById = function (userId, result) {
  let sql = " DELETE FROM users WHERE id = ?";
  dbConn.query(sql, userId, function (err, res) {
    if (err) {
      console.log("error in query: ", err);
      result(null, res);
    } else {
      console.log(`Deleting the user with the id: ${userId}`, res);
      result(null, res);
    }
  });
};

// Query to create an user
User.create = function (newUser, result) {
  let sql = "INSERT INTO users set ?";
  dbConn.query(sql, newUser, function (err, res) {
    if (err) {
      console.log("error in query: ", err);
      result(null, res);
    } else {
      console.log("A new user was created, which is: ", res);
      result(null, res);
    }
  });
};

//Query update an user by ID
User.update = function (id, user, result) {
  let sql = "UPDATE users SET first_name=?,last_name=?,email=?,password=?,status=?,is_Deleted=?,created_at=?, updated_at=? WHERE id = ?";
  let newData = [user.first_name, user.last_name, user.email, user.password, user.status, user.is_Deleted, user.created_at, user.updated_at, id];
  dbConn.query(sql, newData, function (err, res) {
    if (err) {
      console.log("error in query: ", err);
      result(null, res);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
