import React from 'react'
import Images from './Images'
import Description from './Description'

const Slider = () => {
  return (
    <>
        <div className='grid place-items-center grid-col-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl'>
            <div className='w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-2xl'>
                <Images />
                <Description />
            </div>
        </div>
    </>
  )
}

export default Slider
