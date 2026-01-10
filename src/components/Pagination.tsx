import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  maxPages: number;
}
const Pagination = ({
  currentPage,
  handlePrevPage,
  handleNextPage,
  maxPages,
}: Props) => {
  return (
    <div className="flex items-center gap-6 justify-center py-4">
      {/* Previous Button */}
      <Button
        onClick={handlePrevPage}
        variant="outline"
        disabled={currentPage === 1}
        className="disabled:bg-gray-400 px-3 py-1"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <p className="pointer-events-none" aria-disabled>
        {currentPage}
      </p>

      {/* Next Button */}
      <Button
        onClick={handleNextPage}
        variant="outline"
        disabled={currentPage === maxPages}
        className="disabled:bg-gray-400 px-3 py-1 "
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Pagination;
