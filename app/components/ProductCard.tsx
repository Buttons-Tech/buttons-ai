import { images } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <>
    
    {images.map((image) => (
           <div key={image.id}  className=" bg-white relative rounded-2xl max-h-[15rem] hover:cursor-pointer  shadow-2xl border-l-4 border-primary overflow-hidden">
            <Link href={image.link} >
    
            <Image
              src={image.src}
              alt={image.alt}
              width={150}
              height={100}
              className=" w-full h-[7rem] object-cover "
            />
            </Link>
        <span className="inline-block absolute bottom-2 right-2 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
          {image.tag}
        </span>
        {/* <div className="px-8 pb-8 hidden">
          <h4 className="text-2xl font-bold mb-3 text-charcoal">{image.title}</h4>
          <p className="text-gray-600 mb-4">
            {image.desc}
          </p>

        
        </div> */}
        {/* Retaining soft green tag color */}
      </div>))}

    </>
  );
};

export default ProductCard;
