import React from 'react'
import arrow from './assets/star.webp'

export default function Grid() {
  return (
    <div className="md:w-fit m-auto">
    <div className='grid md:grid-cols-2 gap-4 place-items-center content-center grid-cols-1 '>
      {/* #050a36 */}
      {/* card1 */}
      <div class="info-card flex justify-center gap-x-4" >
        <div class="block p-6 pl-14 rounded-lg shadow-lg max-w-xs">
            <h5 class="text-gray-100 text-xl  leading-tight font-medium mb-2">Web3 identities</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-10 h-10 mt-5' />
      </div>

      {/* card2 */}
      <div class="info-card flex justify-center gap-x-4" >
        <div class="block p-6 pl-14  rounded-lg shadow-lg max-w-xs">
            <h5 class="text-gray-100 text-xl leading-tight font-medium mb-2">Web3 storage</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-10 h-10 mt-5' />
      </div>
      {/* card 3 */}
      <div class="info-card flex justify-center gap-x-4" >
        <div class="block p-6 pl-14  rounded-lg shadow-lg max-w-xs">
            <h5 class="text-gray-100 text-xl leading-tight font-medium mb-2">Web3 compute</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-10 h-10 mt-5' />
      </div>
      {/* card 4 */}
      <div class="info-card flex justify-center gap-x-4" >
        <div class="block p-6 pl-14  rounded-lg shadow-lg max-w-xs">
            <h5 class="text-gray-100 text-xl leading-tight font-medium mb-2">Web3 hosting</h5>
            <p class="text-gray-400 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
        </div>
        <img src={arrow} alt="" className='w-10 h-10 mt-5' />
      </div>
    </div>
    </div>
  )
}
