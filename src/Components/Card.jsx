import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function CollectionCard({ collection }) {
  return (
    <Card className="max-w-sm rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-[#F5DEB3]">
      <CardHeader
        floated={false}
        className="h-96 overflow-hidden rounded-t-2xl"
      >
        <img
          src={collection.imgSrc}
          alt={collection.name}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="text-center py-6">
        <Typography
          variant="h5"
          className="text-xl font-bold text-gray-900 tracking-wide"
        >
          {collection.name}
        </Typography>
      </CardBody>
    </Card>
  );
}
