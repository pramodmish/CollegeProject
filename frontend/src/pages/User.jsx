import React, { useEffect, useState } from "react";
import axios from "axios";
import Editor from "../components/Editor";
import { Input, Button } from "../components/index";
import parse from "html-react-parser";
axios.defaults.withCredentials = true;
function User() {
  const [user, setuser] = useState("");
  const [blog, setBlog] = useState("");
  const [title, setTitle] = useState("");

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
    const data = {
      title,
      blog,
    };
    console.log(data);
  };
  return (
    <>
      <div className="flex  h-screen w-full ">
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
          <div className="h-full sm:w-full md:w-[80%] lg:w-[100%] p-5 border-2 rounded-lg overflow-scroll ">
            <h1>{title}</h1>
            {parse(blog)}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
