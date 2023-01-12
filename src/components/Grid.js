import React from 'react'
import arrow from './assets/arrow.png'

export default function Grid() {
  return (
    <div className="w-fit m-auto">
    <div className='grid grid-cols-2 gap-4 place-items-center content-center '>
      {/* #050a36 */}
      {/* card1 */}
      <div class="flex justify-center gap-x-4" style={{background:"#050a36"}}>
        <div class="block p-6 rounded-lg shadow-lg max-w-xs">
            <h5 class="text-gray-100 text-xl leading-tight font-medium mb-2">Web3 services for every app</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-24 h-24 mt-10' />
      </div>

      {/* card2 */}
      <div class="flex justify-center gap-x-4" style={{background:"#050a36"}}>
        <div class="block p-6 rounded-lg shadow-lg max-w-xs">
            <h5 class="text-gray-100 text-xl leading-tight font-medium mb-2">Web3 services for every app</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-24 h-24 mt-10' />
      </div>
      {/* card 3 */}
      <div class="flex justify-center gap-x-4" style={{background:"#050a36"}}>
        <div class="block p-6 rounded-lg shadow-lg max-w-xs">
            <h5 class="text-gray-100 text-xl leading-tight font-medium mb-2">Web3 services for every app</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-24 h-24 mt-10' />
      </div>
      {/* card 4 */}
      <div class="flex justify-center gap-x-4" style={{background:"#050a36"}}>
        <div class="block p-6 rounded-lg shadow-lg max-w-xs">
            <h5 class="text-gray-100 text-xl leading-tight font-medium mb-2">Web3 services for every app</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-24 h-24 mt-10' />
      </div>
    </div>
    </div>
  )
}
