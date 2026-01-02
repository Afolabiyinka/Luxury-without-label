const StarRating = ({ rating }: { rating: number }) => {
  const filledStar = "★";
  const emptyStar = "☆";

  return (
    <div className="flex text-2xl gap-4">
      {Array.from({ length: 5 }, (_, index) =>
        index < rating ? (
          <span key={index} className="text-3xl">
            {filledStar}
          </span>
        ) : (
          <span key={index} className="text-gray-400 text-3xl">
            {emptyStar}
          </span>
        )
      )}
    </div>
  );
};

export default StarRating;
