import { useState } from "react";
import { UseBlogs } from "./hooks/BlogContext";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import TextEditor from "./components/TextEditor";
const CreateBlog = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    addBlog,
    blogTitle,
    setBlogTitle,
    blogContent,
    setBlogContent,
    setBlogAuthor,
    blogAuthor,
  } = UseBlogs();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blogTitle.trim()) {
      return alert("Pls add a title");
    }

    if (!image) {
      return alert("Pls upload an image");
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        addBlog({
          title: blogTitle,
          content: blogContent,
          imageUrl: image,
          author: blogAuthor,
        });

        setBlogTitle("");
        setBlogContent("");
        setImage(null);
        setBlogAuthor("");
        navigate("/blogs");
      } catch (error) {
        console.error("Error adding blog:", error);
        alert("Failed to add blog. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-2">
      <h1 className="text-3xl font-bold mb-3">Create New Blog</h1>

      <div className="w-full flex flex-col lg:flex-row gap-3  rounded-xl shadow-lg p-2 md:p-4">
        <div className="w-full lg:w-1/2 rounded-xl p-2 flex flex-col gap-4">
          <div className="h-64 md:h-[25rem] w-full bg-white/50 rounded-xl flex items-center justify-center overflow-hidden border-2 border-dashed">
            {image ? (
              <img
                src={image}
                alt="Blog preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-center p-4">
                <p className="">Upload an image for your blog</p>
                <p className=" text-sm mt-2">Recommended: 1200 x 800px</p>
              </div>
            )}
          </div>

          <label className="transition-colors cursor-pointer rounded-lg p-3 text-center bg-gray-300 ">
            {image ? "Change Image" : "Upload Image"}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <div className="w-full lg:w-1/2 p-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
              <label htmlFor="blogTitle" className="block font-medium mb-2">
                Blog Title
              </label>
              <input
                id="blogTitle"
                type="text"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Enter your blog title..."
                className="w-full p-3 rounded-lg border text-[1rem]  focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none tracking-widest font-semibold"
              />
            </div>
            <div>
              <label htmlFor="blogTitle" className="block font-medium mb-2">
                Blog Author
              </label>
              <input
                id="blogAuthor"
                type="text"
                value={blogAuthor}
                onChange={(e) => setBlogAuthor(e.target.value)}
                placeholder="Enter your name..."
                className="w-full p-3 rounded-lg border  focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-[1rem] tracking-widest font-semibold"
              />
            </div>

            <div>
              <TextEditor />
            </div>
            <div className="flex items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:opacity-85 transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? <Spinner /> : "Publish Blog"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/blogs")}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
