'use client'
import React, { useState } from 'react'
import security from '../../public/img/security.jpg'

const page = () => {

const [access, setAccess] = useState(true);
const handleClick =()=>{
  setAccess(!access)
  window.alert('access granted')
}

// type prop = {
//     heroStyle :
// }

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/img/security.jpg)',
          backgroundPosition: 'contain',
        }}
        className="overflow-hidden relative"
      >
        {/* BLACK GRADIENT OVERLAY */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)',
          }}
        />

        {/* HERO CONTENT (above overlay) */}
        <span className="text-white text-xl font-black absolute top-[12rem] left-[2rem] z-20">
          BUTTONS SECURITY
        </span>

        <div
          onClick={handleClick}
          className="absolute right-[14.5rem] -bottom-[3rem] text-white w-[20rem] h-[20rem] rounded-full flex items-center justify-center hover:cursor-pointer z-20"
        >
          <span className="text-2xl">{access ? 'Welcome' : 'Exit'}</span>
        </div>
      </div>

      {access ? (
        <div className="m-auto">
          <span className="text-2xl text-black">Welcome</span>
          <br />
          <button>Exit</button>
        </div>
      ) : (
        <div>Bye</div>
      )}
    </>
  )
}

export default page
