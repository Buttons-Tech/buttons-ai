import { images } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <>
    {images.map((image) => (
           <div key={image.id}  className=" bg-white rounded-2xl shadow-2xl border-l-4 border-primary overflow-hidden">

        <Image
          src={image.src}
          alt={image.alt}
          width={150}
          height={100}
          className=" w-full h-[7rem] object-cover "
        />
        <div className="px-8 pb-8">
          <h4 className="text-2xl font-bold mb-3 text-charcoal">{image.title}</h4>
          <p className="text-gray-600 mb-4">
            {image.desc}
          </p>
        </div>
        {/* Retaining soft green tag color */}
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
          Cleaning Services
        </span>
      </div>))}

    </>
  );
};

export default ProductCard;
