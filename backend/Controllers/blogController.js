const blogModel = require("../Model/blogModel");

//add blog post
exports.addBlog = async (req, res) => {
  const id = req.user._id;
  const { title, blogPost } = req.body;

  try {
    const blog = await blogModel.create({
      userId: id,
      title: title,
      blogPost: blogPost,
    });
    if (blog) {
      res.status(201).json({
        status: true,
        message: "blog add successful",
        blog,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

//get All blogs
exports.getAllPost = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    if (!blogs) {
      return res.status(404).json({
        status: false,
        message: "Not found",
      });
    }
    res.status(200).json({
      status: true,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

//get One blog
exports.getBlog = async (req, res) => {
  const id = req.user._id;
  try {
    const blog = await blogModel.findOne({ userId: id });
    if (!blog) {
      return res.status(404).json({
        status: false,
        message: "not found",
      });
    }
    res.status(200).json({
      status: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

//delete blog
exports.deleteBlog = async (req, res) => {
  const id = req.user._id;
  try {
    await blogModel.deleteOne({ userId: id });
    res.status(200).json({
      status: true,
      message: "delete blog successful",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};
