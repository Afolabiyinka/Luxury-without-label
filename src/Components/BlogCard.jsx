import React from "react";
import { Card, IconButton, Typography } from "@material-tailwind/react";
import { User, Trash } from "lucide-react";
import { UseBlogs } from "../Contexts/BlogContext";

export default function BlogCard({ blog }) {
  const { deleteBlog } = UseBlogs();

  return (
    <Card className="flex h-fit w-full max-w-[48rem] flex-col gap-1 p-2 md:flex-row overflow-hidden shadow-lg hover:opacity-95 active:opacity-100 cursor-pointer transition-all duration-300 justify-center items-center">
      <Card.Header className="m-0 h-full w-full md:w-3/4">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="h-80 w-full object-cover rounded-md"
        />
      </Card.Header>
      <Card.Body className="h-fit  p-5 flex flex-col justify-between">
        <div>
          <Typography variant="h1" className="text-2xl mb-3 font-bold">
            {blog.title}
          </Typography>
          <Typography className="mb-6">{blog.content}</Typography>
        </div>

        <span className="flex gap-2 items-center">
          <User color="orange" />
          <p className="font-semibold text-black">
            {blog.author || "Luxury Co"}
          </p>
        </span>
      </Card.Body>
    </Card>
  );
}
