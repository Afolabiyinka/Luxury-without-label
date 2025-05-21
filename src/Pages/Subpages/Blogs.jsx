import { motion } from "framer-motion";
import BlogCard from "../../Components/BlogCard";
import { PenLine } from "lucide-react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { UseBlogs } from "../../Contexts/BlogContext";

const Blogs = () => {
  const navigate = useNavigate();
  const { blogs } = UseBlogs();

  return (
    <motion.div
      className="w-full  flex flex-col gap-4 justify-center items-center p-4 "
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {blogs && blogs.length > 0 ? (
        <div className="h-full grid grid-cols-1 justify-center items-center gap-4 p-2">
          {blogs.map((item) => (
            <BlogCard blog={item} />
          ))}
          <span>
            {" "}
            <Button
              color="primary"
              variant="outline"
              onClick={() => navigate("/newBlog")}
            >
              Create a new Blog
            </Button>
          </span>
        </div>
      ) : (
        <div className="h-[50%] w-full flex flex-col gap-3 justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <PenLine size={64} className="text-gray-400 animate-bounce mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              No Blog Articles Found
            </h2>
            <p className="text-lg text-gray-600">
              Start by adding your first blog
            </p>
          </div>
          <Button
            color="primary"
            variant="outline"
            onClick={() => navigate("/newBlog")}
          >
            Create a new Blog
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default Blogs;
