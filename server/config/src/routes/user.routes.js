const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

//get all users
router.get("/", userController.findAll);

//get an user by id
router.get("/:id", userController.findOne);

//delete an user by id
router.delete("/:id", userController.deleteById);

//create an user
router.post("/", userController.create);

// update an userController
router.put("/:id", userController.update);
module.exports = router;
