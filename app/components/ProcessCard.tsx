import { process } from "@/utils/constants";
import React from "react";

const ProcessCard = () => {
  return (
    <>
        {process.map((pro)=>(
      <div key={pro.id} className="flex flex-col items-center p-8 bg-green-100 rounded-2xl shadow-xl  z-10 w-full">

        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white font-black text-2xl mb-4 shadow-xl">
          {pro.id}
        </div>
        <h4 className="text-xl font-bold mb-2 text-charcoal">{pro.title}</h4>
        <p className="text-gray-600 text-center text-sm">
          {pro.desc}
        </p>
      </div>
        ))}
    </>
  );
};

export default ProcessCard;
