import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import BlogModel from "./BlogModel";
function Blog() {
  const [show, setShow] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getAllBlogs")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangeHandle = (id) => {
    axios
      .post("http://localhost:8000/api/v1/showBlog", {
        id: id,
      })
      .then((res) => {
        if (res.data.status === true) {
          setBlog(res.data.blog);
          console.log(blog);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(true);
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="h-full w-full md:w-[60%] lg:w-[60%] xl:w-[60%]  overflow-scroll no-scrollbar p-10  ">
        {blogs.map((data, id) => (
          <div
            key={id}
            className=" space-y-5 m-10 bg-gray-950 p-10"
            onClick={() => onChangeHandle(data._id)}
          >
            <h1 className="text-4xl">{data.title}</h1>

            {parse(data.blogPost)}
          </div>
        ))}

        {show && (
          <BlogModel
            title={blog.title}
            blogPost={blog.blogPost}
            onClick={() => setShow(false)}
          />
        )}
      </div>
      {/* {parse()} */}
    </div>
  );
}

export default Blog;
