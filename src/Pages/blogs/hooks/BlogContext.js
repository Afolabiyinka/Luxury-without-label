import { useContext, createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BlogContext = createContext();

export const UseBlogs = () => useContext(BlogContext);

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(() => {
    const storedBlogs = localStorage.getItem("Blogs");
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  });

  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);

  function addBlog({ title, content, imageUrl, author }) {
    setBlogs((currentBlogs) => [
      ...currentBlogs,
      {
        id: crypto.randomUUID(),
        title,
        content,
        imageUrl,
        author,
      },
    ]);
  }
  function deleteBlog(id) {
    setBlogs((currentBlogs) => {
      return currentBlogs.filter((blog) => blog.id !== id);
    });
  }

  const value = {
    addBlog,
    blogs,
    blogAuthor,
    blogTitle,
    setBlogTitle,
    setBlogAuthor,
    blogContent,
    setBlogContent,
    deleteBlog,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
