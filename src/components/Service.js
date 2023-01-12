import React from 'react'
import arrow from './assets/arrow.png'
import Grid from './Grid'
export default function Service() {
  return (
    <div className='flex justify-center flex-col'>
      {/* heading */}
      <div class="flex justify-center gap-x-24">
        <div class="block p-6 rounded-lg shadow-lg max-w-lg">
            <h5 class="text-gray-100 md:text-5xl text-xl leading-tight font-bold mb-2">Web3 services for every app</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-24 h-24 mt-10' />
      </div>
      <Grid/>
    </div>
  )
}
