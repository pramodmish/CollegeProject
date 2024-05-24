import React, { useState, useId } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { forwardRef } from "react";
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
function Editor({ onChange, value }, ref) {
  const id = useId();

  return (
    <div className="px-3 py-3 lg:h-96 lg:w-[100%%] md:w-[100%]">
      <ReactQuill
        className="h-[300px] sm:w-full w-96 md:h-[300px] md:w-[100%] lg:w-[100%] lg:h-[400px] "
        id={id}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(Editor);
