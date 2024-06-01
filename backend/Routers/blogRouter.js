const blogController = require("../Controllers/blogController");
const authcontroller = require("../Controllers/authController");
const express = require("express");

const router = express.Router();

router
  .post("/addblog", authcontroller.protect, blogController.addBlog)
  .get("/getAllBlogs", blogController.getAllPost)
  .get("/getBlog", authcontroller.protect, blogController.getBlog)
  .post("/showBlog", blogController.showBlog)
  .delete("/deleteBlog", authcontroller.protect, blogController.deleteBlog);

module.exports = router;
