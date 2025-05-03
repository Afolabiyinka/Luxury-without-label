import React from "react";
import { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { UseBlogs } from "../../Contexts/BlogContext";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const { addBlog } = UseBlogs();

  const { blogTitle, setBlogTitle } = UseBlogs();
  const { blogContent, setBlogContent } = UseBlogs();
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const localImgUrl = URL.createObjectURL(file);
      setImage(localImgUrl);
    }
  }

  return (
    <div className="w-[100%] h-screen flex flex-col md:flex-row p-1.5 gap-2">
      <div className="w-full md:w-[50%] bg-orange-50 md:h-[85%] h-[60%] p-2 flex flex-col gap-3 rounded-lg">
        {image && (
          <div className="bg-orange-50 md:h-[90%] h-[87%]">
            <img
              src={image}
              alt="Blogimage"
              className="h-full w-full backdrop-blur-md rounded-lg object-cover"
            />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="bg-white/35 border-[1px]  p-1 rounded-xl"
        />
      </div>
      <div className="full md:w-[50%] h-[85%] bg-[#eace9a] p-4 rounded-lg flex flex-col gap-4">
        <form onSubmit={addBlog}>
          <span>
            <h1 className="text-2xl font-mono font-semibold">Blog Title</h1>
            <Input color="secondary" />
          </span>
          <span className="">
            <h1 className="text-2xl font-mono font-semibold">Blog Content</h1>
            <Textarea color="secondary" rows={12} />
          </span>
          <Button>Add Blog</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
