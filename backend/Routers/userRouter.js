const express = require("express");
const authController = require("../Controllers/authController");
const userController = require("../Controllers/UserController");
const router = express.Router();

router
  .post("/signUp", userController.SignupUser)
  .post("/otpVerify", userController.otpVerify)
  .get("/getCookie", authController.protect) //tempraray route for testing
  .post("/login", userController.login)
  .get("/logout", userController.logout);

module.exports = router;
