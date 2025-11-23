import React from "react";
import { watches } from "../../Services/DataBases/watches";

const Watches = () => {
  return (
    <div clasn>
      <span>
        {watches.map((watch) => (
          <div>
            <span>{watch.model}</span>
            <img
              src={watch.image}
              alt={watch.model}
              className="border h-full w-full"
            />
          </div>
        ))}
      </span>
    </div>
  );
};

export default Watches;
