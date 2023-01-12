import React from 'react'
import web33 from './assets/web3img.png'
export default function Hero() {
  return (
    <div>
      <div class="flex justify-center">
  <div class="block p-6 md:mt-20 mt-12 rounded-lg shadow-lg max-w-5xl">
    <h1 class="text-gray-100 md:text-9xl text-5xl font-bold leading-tight md:mb-2">Build <span style={{color:"#f9fe73"}}>Web3 </span> 🌍 <br/> <span style={{color:"#77dae7"}}>products</span> easily</h1>
    <div className="md:flex justify-center md:mt-20 my-10 gap-x-5 md:w-9/12 w-full grid grid-cols-1 gap-y-5">
    <p class="text-gray-200 text-base ">
      Some quick example and make up the bulk of the card's
      content.e text to build on the card title text to build on the card titl
    </p>
    <button style={{background:"#f9fe73"}} className="e-btn h-min w-fit text-grey-100 gap-x-2 font-bold md:w-fit text-lg px-10 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-hotpink" type="button">LearnMore </button>
  </div>
    <img src={web33} alt="" className='w-min'/>
    <div className="grid grid-cols-1 place-items-center content-center w-full h-24 " style={{background:"#f9fe73"}} >
      <p className=' font-bold text-lg align-middle mx-10 '>
      We Are on a Mission to Change the Way People Invest.
      </p>
    </div>
  </div>
</div>
    </div>
  )
}
