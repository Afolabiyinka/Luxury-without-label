import { Card } from "@material-tailwind/react";

export default function DummyCard() {
  return (
    <Card className="transition-all duration-300 animate-pulse flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl  w-[100%] ">
      {/* Product Image */}
      <div className="relative overflow-hidden group">
        <div className="h-64 w-full bg-gray-100 object-cover transform group-hover:scale-105 transition-transform duration-300 border-b" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4">
        <p className="text-lg font-semibold bg-gray-300 rounded-lg h-3 w-64 line-clamp-2 transition-all duration-300 animate-pulse "></p>

        <span className="flex justify-between p-2 items-center">
          <p className="w-28 rounded-lg bg-gray-300 h-3 transition-all duration-300 animate-pulse "></p>
          <button
            className={`h-10 w-10 rounded-lg text-sm font-medium bg-gray-300 flex items-center justify-center transition-all duration-300 hover:scale-105
              
            `}
          ></button>
        </span>
      </div>
    </Card>
  );
}
