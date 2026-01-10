import AddToBag from "@/modules/user/bag/components/AddtoBag";

const random = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full border">
      <div className="w-full  gap-5 px-4  p-5 overflow-x-scroll  flex md:gap-6 lg:gap-8 md:px-6 lg:px-8">
        <AddToBag text="Add to bag" />
      </div>
    </div>
  );
};

export default random;
