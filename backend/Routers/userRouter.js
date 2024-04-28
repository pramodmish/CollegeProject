const express = require("express");
const userController = require("../Controllers/UserController");
const router = express.Router();

router
  .post("/signUp", userController.SignupUser)
  .post("/login", userController.login);

module.exports = router;
