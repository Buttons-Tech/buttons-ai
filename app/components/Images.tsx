import React from 'react'
import { images } from '@/utils/constants'
import Image from 'next/image'

const Images = () => {
  return (
    <>
    {images.map((image, index) => (
        <div key={index} className="p-4 block w-full h-[80vh] object-cover transition-all duration--500 ease-in-out">
            <Image src={image.src} alt={image.alt} width={400} height={400} className="rounded-tl-3xl rounded-bl-3xl shadow-lg w-full h-full object-cover " />
        </div>
    ))}
    </>
  )
}

export default Images
