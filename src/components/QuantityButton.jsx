import React, {useState} from "react";

const QuantityButton = () => {
  let [baseQty, setBaseQty] = useState(1);
  return (
    <div className="w-[100px] h-[38px] flex items-center justify-center gap-3 border border-black rounded-lg">
      <button onClick={() => setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)} className="flex items-center justify-center text-lg p-2 cursor-pointer">
        -
      </button>
      <span className="text-black">{baseQty}</span>
      <button onClick={() => setBaseQty(baseQty + 1)} className="flex items-center justify-center text-lg p-2 cursor-pointer">
        +
      </button>
    </div>
  );
};

export default QuantityButton;
