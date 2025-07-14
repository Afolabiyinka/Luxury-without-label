export default function CollectionCard({ collection }) {
  return (
    <div className="max-w-sm rounded-sm shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer active:opacity-80 active:duration-700">
      <div className="h-80 overflow-hidden rounded-none p-0.5">
        <img
          src={collection.imgSrc}
          alt={collection.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center py-6">
        <h5 className="text-xl font-bold  tracking-wide">{collection.name}</h5>
      </div>
    </div>
  );
}
