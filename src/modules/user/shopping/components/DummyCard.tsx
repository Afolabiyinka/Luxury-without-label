export default function DummyCard() {
  return (
    <div className="animate-pulse">
      <div className="h-64 w-64 bg-zinc-300" />

      <div className="p-1 space-y-4">
        <div className="h-3 w-3/4 bg-zinc-300 rounded-md" />

        <div className="flex items-center justify-between ">
          <div className="h-3 w-1/3 bg-zinc-300 rounded-md" />
          <div className="h-10 w-10 bg-zinc-300 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
