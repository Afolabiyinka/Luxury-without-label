import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../../Components/BlogCard";
import BlogData from "../../Mock Backend/Blogs.json";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBlogs(BlogData.blogs);
  }, []);
  return (
    <motion.div
      className="w-full h-full flex flex-col gap-2 justify-center items-center p-4 "
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
      <Button
        color="primary"
        variant="outline"
        onClick={() => navigate("/newBlog")}
      >
        Create a new Blog
      </Button>
    </motion.div>
  );
};

export default Blogs;
