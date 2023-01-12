import React from 'react'
import about from './assets/about.png'


export default function About() {
  return (
    <div className='flex flex-col block justify-center items-center mt-20 mb-20 max-w-3xl m-auto'>
        <h1 className='text-white font-medium text-7xl flex mb-10'>Web3 done simple!</h1>
        <p className='text-gray-200 mb-20 max-w-sm text-center '>
          Focus on the roduct not blockchain complexity and stick to your standard workflow
        </p>
        {/* card section */}
    <div className="flex flex-row justify-center items-center gap-x-20 ">
      {/* cards */}
    <div className="card-sec flex flex-col justify-center ">
      {/* card1 */}
        <div class="flex justify-center border-2 border-transparent border-t-lime-200 border-x-amber-300 rounded-xl mb-4">
          <div class="flex flex-col md:flex-row md:max-w-lg rounded-lg shadow-lg">

            {/* <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" /> */}
          <div class="p-6 flex flex-col justify-start">
             <h5 class="text-gray-100 text-xl font-medium mb-2">Code faster</h5>
              <p class="text-gray-400 text-base mb-0">
                This is a wider card with supporting text below as a natural lead-in to additional content. 
              </p>
          </div>
         </div>
        </div>
        <div class="flex justify-center border-2 border-transparent border-t-lime-200 border-x-amber-300 rounded-xl">
          <div class="flex flex-col md:flex-row md:max-w-sm rounded-lg shadow-lg">
           {/* <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" /> */}
            <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-100 text-xl font-medium mb-2">Code Blockchain</h5>
            <p class="text-gray-400 text-base mb-0">
               This is a wider card with supporting text below as a natural lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* card img */}
      <div className="cardimg flex">
        <img src={about} alt="" />
      </div>
      </div>
    </div>

  )
}
