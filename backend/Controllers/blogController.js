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
  const id = req.user._id;
  try {
    const blogs = await blogModel.find({ userId: id });
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
