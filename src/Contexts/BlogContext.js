import { useContext, createContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const UseBlogs = () => useContext(BlogContext);

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState({});
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState(null);

  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);

  function addBlog(e) {
    e.preventDefault();
    setBlogs((currentBlogs) => {
      return [
        ...currentBlogs,
        {
          id: crypto.randomUUID(),
          title: blogTitle,
          content: blogContent,
        },
      ];
    });

    alert("Blog Added");
  }

  const value = {
    addBlog,
    blogs,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
