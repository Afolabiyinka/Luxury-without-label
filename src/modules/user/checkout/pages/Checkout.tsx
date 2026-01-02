import Cleave from "cleave.js/react";

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-black";

const Checkout = () => {
  return (
    <div className="flex flex-col gap-4 max-w-md">
      <Cleave
        options={{ creditCard: true }}
        placeholder="Card number"
        className={inputClass}
      />

      <div className="flex gap-3">
        <Cleave
          options={{ date: true, datePattern: ["m", "y"] }}
          placeholder="MM / YY"
          className={inputClass}
        />

        <Cleave
          options={{ numericOnly: true, blocks: [4] }}
          placeholder="CVC"
          className={inputClass}
        />
      </div>
    </div>
  );
};

export default Checkout;
