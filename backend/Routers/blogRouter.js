const blogController = require("../Controllers/blogController");
const authcontroller = require("../Controllers/authController");
const express = require("express");

const router = express.Router();

router
  .post("/addblog", authcontroller.protect, blogController.addBlog)
  .get("/getAllBlogs", authcontroller.protect, blogController.getAllPost);

module.exports = router;
