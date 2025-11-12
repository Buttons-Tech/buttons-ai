"use client";
// import Image from "next/image";
// import React, { useEffect } from "react";

// const Tutorials = () => {
//   const [task, setTask] = useState([]);
//   const [isAdult, setIsAdult] = useState(true);
//   const handleSubmit = ()=>{
//     let age = document.getElementById('age').value
//     if(age >= 18) {setIsAdult(!isAdult)} else {setIsAdult(false)}
//   }

//   return (
//     <>
//       <div>Buy Drinks</div>
//     <label htmlFor="" className="text-2xl text-green-900">How old are you?</label>
//     <input id="age" type="text"  className="border rounded-xl mb-[2rem]"/><br />
//     <button onClick={handleSubmit} className="bg-blue-400 text-white px-[5rem] hover:cursor-pointer ">submit</button>
//     {}

//       {isAdult? 
      
//       <div className="bg-gray-200 w-[15rem]  m-auto flex flex-col items-center">
//         <Image
//           alt="drink"
//           src="/img/LH.png"
//           width={100}
//           height={200}
//           className="w-[10rem] h-[8rem] "
//         />
//         <div className=" flex flex-col">
//           <span className="font-bold text-2xl">GIN</span>
//           <span className="text-2xl">N5000</span>
//           <span className="text-sm font-light">very good drink</span>
//           <button className="bg-green-400 px-[4rem] py-[1rem] flex justify-center w-[5rem] rounded-2xl text-green-800">
//             Buy
//           </button>
//         </div>
//       </div>
//     : 
    
//       <div className="text-center">
//         <span className="text-red-600 text-2xl font-bold "  >You are not allowed to drink</span>
//       </div>
//     }
//     </>
//   );
// };

// export default Tutorials;



// counter numbers

import React, { useEffect, useState } from 'react'

const Tutorials = () => {

    const [count, setCount] = useState(0);
const minusCount = () => {
    setCount(c=> c - 1);
}

const addCount = () => {
    setCount(c=> c + 1);
}

    useEffect(() => {
    
    document.title = `You clicked ${count} times`; 
    }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addCount} className='bg-amber-300 p-3 mr-4 text-2xl'>+</button>
      <button onClick={minusCount} className='bg-amber-300 p-3 text-2xl'>-</button>
    </div>
  )
}

export default Tutorials

// import React from 'react'

// const Tutorials = () => {
//     const [color, setColor] = React.useState("red");

//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
//         }, 1000);   
//         return () => clearInterval(interval);
//     }, []);

//   return (
//     <div>
//       <h1 style={{ color: color }}>This text changes color every second!</h1>
//       <div style={{backgroundColor: color}} className='w-[4rem] h-[4rem]'>

//       </div>
//     </div>
    
//   )
// }

// export default Tutorials
