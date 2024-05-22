const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  [
    {
      userId: {
        type: String,
      },
      title: {
        type: String,
      },
      blogPost: {
        type: String,
      },
    },
  ],
  {
    timeStamp: true,
  }
);

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
