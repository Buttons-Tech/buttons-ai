import { images } from '@/utils/constants'
import React from 'react'

const Description = () => {
  return (
    <>
        <div className='grid place-items w-full bg-gray-300 relative rounded-tr-3xl rounded-br-3xl '>
            <div className='uppercase text-sm absolute right-4 top-2 underline-offset-4 underline'>
                Products
            </div>
            {images.map((element, index) => (
                <div key={index} className="p-4 block w-full h-[80vh] object-cover transition-all duration--500 ease-in-out">
                    <div className='py-16 text-5xl font-extrabold' > {element.title}

                    </div>
                    <div className='leading-relaxed font-medium text-base tracking-wide h-40 italic text-gray-600'>{element.desc}</div>
                    <button className='bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10'>
                        Learn More
                    </button>
                    <div className='absolute bottom-1 w-full flex justify-center items-center'></div>
                </div>
            ))}
        </div>    
    </>
  )
}

export default Description
