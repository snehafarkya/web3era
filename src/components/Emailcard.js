import React from 'react'

export default function Emailcard() {
  return (
    <div className='emailcard'>
      <div class="flex items-center justify-center  md:mt-40 mt-20 mb-20 w-9xl m-auto">
    
	      <div class="rounded-2xl  shadow-xl p-10 max-w-3xl">
        <div class="flex flex-col  space-y-4">
	        <h1 class="font-bold md:text-5xl text-xl text-gray-100 w-5/6 text-left mb-10">Make sure of your choice then discuss with us</h1>
          <p class="text-sm text-gray-500 text-left mb-10 w-5/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea.</p>
          <div className=' md:flex justify-between gap-x-9 block '>
          <input type="text" placeholder="Email" class="mt-10 border-2 bg-transparent border-yellow-200 text-lg rounded-full w-full h-14 px-4 py-4 text-gray-200"/>
          <button class="e-btn text-gray-900 text-lg rounded-full mt-10 font-bold px-6 py-4 md:w-1/4 w-fit " style={{background:'#f9fe73'}}>Let's Talk</button>
          </div>
        </div>
        </div>
	
      </div>
    </div>
  )
}
