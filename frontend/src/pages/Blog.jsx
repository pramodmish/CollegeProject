import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
function Blog() {
  const [blogs, setBlogs] = useState([]);
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
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="h-full w-full md:w-[60%] lg:w-[60%] xl:w-[60%]  overflow-scroll no-scrollbar p-10  ">
        {blogs.map((data, id) => (
          <div key={id} className=" space-y-5 m-10 bg-gray-950 p-10">
            <h1 className="text-4xl">{data.title}</h1>
            {parse(data.blogPost)}
          </div>
        ))}
      </div>
      {/* {parse()} */}
    </div>
  );
}

export default Blog;
