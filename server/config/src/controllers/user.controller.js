const User = require("../models/user.model");

exports.findAll = function (req, res) {
  User.findAll(function (err, user) {
    console.log("this is the controller");
    if (err) {
      res.send(err);
      console.log("res", user);
      res.send(user);
    }
    res.json({
      greeting: "The query was successfull",
      users: user,
    });
  });
};

exports.findOne = function (req, res) {
  User.findOne(req.params.id, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json({
      data: user,
    });
  });
};

exports.deleteById = function (req, res) {
  User.deleteById(req.params.id, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json({ error: false, message: "Employee successfully deleted" });
  });
};

exports.create = function (req, res) {
  const newUser = new User(req.body);

  // if body has no data
  if (req.body.constructor === Object && Object.keys(req.body) === 0) {
    res.status(404).send({ error: true, message: "Please provide all the required fields" });
  } else {
    // else create the user
    User.create(newUser, function (error, user) {
      if (error) {
        res.send(err);
      }
      res.json({
        data: user,
      });
    });
  }
};
