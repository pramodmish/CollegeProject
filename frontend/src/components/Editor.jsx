import React, { useState, useId } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
function Editor() {
  const id = useId();
  const [value, setValue] = useState("");
  return (
    <div className="px-3 py-3 lg:h-96">
      <ReactQuill
        className="h-[300px] w-96 md:h-[300px] md:w-[600px] lg:w-[800px]  lg:h-[400px] "
        id={id}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
}

export default React.forwardRef(Editor);
