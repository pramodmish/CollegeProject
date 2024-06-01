import React from "react";
import parse from "html-react-parser";
import { Button } from "../components/index";
function BlogModel({ title, blogPost, onClick }) {
  if (typeof blogPost !== "string") {
    return <div>Error: Content must be a string</div>;
  }
  return (
    <div className="fixed inset-0  h-screen  flex justify-center items-center flex-col bg-black bg-opacity-60">
      <div className="w-[80%] flex justify-end">
        <h1 className="text-4xl cursor-pointer" onClick={onClick}>
          X
        </h1>
      </div>
      <div className="h-[80%] w-[80%] justify-center rounded-3xl bg-slate-600 flex flex-row gap-10 overflow-scroll no-scrollbar p-10">
        <h1 className="text-4xl ">{title}</h1>
        <div className="w-[60%] h-full overflow-scroll no-scrollbar">
          {parse(blogPost)}
        </div>
        <div className="flex items-end ">
          <Button className={`bg-red-500`}>Delete</Button>
        </div>
      </div>
    </div>
  );
}

export default BlogModel;
