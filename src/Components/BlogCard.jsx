import { Card, Typography, Button, Spinner } from "@material-tailwind/react";
import { BookIcon } from "lucide-react";
import blog1Pic from "../Assets/Images/Women clothin.jpg";

export default function BlogCard({ blog }) {
  return (
    <Card className="flex h-full w-full max-w-[48rem] flex-col md:flex-row bg-[#F5DEB3]">
      <Card.Header className="m-0 h-full w-full md:w-2/5 shrink-0 rounded-r-none ">
        <img
          src={blog.imageUrl}
          alt="Blog"
          className="h-64 w-full object-cover rounded-md"
        />
      </Card.Header>
      <Card.Body className="p-4">
        <Typography type="h5" className="mb-2">
          {blog.name}
        </Typography>
        <Typography className="mb-8">{blog.blogContent}</Typography>
        <Button className="mb-2 flex w-fit items-center gap-2">
          Read More
          <BookIcon size={20} />
        </Button>
      </Card.Body>
    </Card>
  );
}
