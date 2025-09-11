import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UseBlogs } from "../hooks/BlogContext";

// Toolbar options (without image)
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

// Allowed formats (no image)
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
];

export default function TextEditor() {
  const { blogContent, setBlogContent } = UseBlogs();

  return (
    <div className="">
      <h2 className="text-xl font-bold p-1  mb-2">Blog Content</h2>
      <ReactQuill
        theme="snow"
        value={blogContent}
        onChange={setBlogContent}
        modules={modules}
        formats={formats}
        placeholder="Type something fancy..."
        className="w-full p-3 rounded-lg border border-amber-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none  tracking-wide"
      />
      <div className="mt-4 p-2 border rounded">
        <h3 className="font-semibold">Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: blogContent }} />
      </div>
    </div>
  );
}
