import React, { useEffect, useState } from "react";
import axios from "axios";
import Editor from "../components/Editor";
import { Input, Button } from "../components/index";
import parse from "html-react-parser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.withCredentials = true;
function User() {
  const [user, setuser] = useState("");
  const [blog, setBlog] = useState("");
  const [title, setTitle] = useState("");
  const sucessful = (data) => toast.success(data);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getCurUser", {
        withCredentials: true,
      })
      .then((res) => {
        if (res) {
          console.log(res.data.user.email);
          setuser(res.data.user.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/addblog", {
        title: title,
        blogPost: blog,
      })
      .then((res) => {
        if (res.status === 201) {
          setTimeout(() => {
            sucessful("add blog successfull");
            console.log(blog);
          }, 3000);
        }
      })
      .catch((err) => {
        console.log("somthing wrong");
      });
    setTitle("");
    setBlog("");
  };
  return (
    <>
      <div className="flex  lg:h-screen w-full overflow-hidden">
        <div className="place-items-center w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="h-full sm:w-full md:w-[80%] lg:w-[100%]  ">
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col space-y-2"
            >
              <div className="flex justify-end lg:w-[100%] md:w-[100%] px-3 py-3  space-y-3">
                <Button className={`bg-green-500`}>ADD</Button>
              </div>

              <Input
                className="outline-none w-[100%] md:w-[100%] lg:w-[100%]"
                placeholder="Enter title for your blog"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <div>
                <Editor value={blog} onChange={setBlog} />
              </div>
            </form>
          </div>
          <div className="h-full sm:w-full md:w-[80%] lg:w-[100%] p-5  rounded-lg overflow-scroll no-scrollbar">
            <div className=" lg:h-[100%] md:h-[100%]">
              <h1 className="text-4xl h-12">{title}</h1>
              {parse(blog)}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default User;
