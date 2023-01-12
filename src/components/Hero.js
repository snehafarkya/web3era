import React from 'react'
import web33 from './assets/web3img.png'
export default function Hero() {
  return (
    <div>
      <div class="flex justify-center">
  <div class="block p-6 mt-20 rounded-lg shadow-lg max-w-5xl">
    <h1 class="text-gray-100 text-9xl font-bold leading-tight mb-2">Build <span style={{color:"#f9fe73"}}>Web3 </span> 🌍 <br/> <span style={{color:"#77dae7"}}>products</span> easily</h1>
    <div className="flex justify-center mt-20 gap-x-5 w-9/12">
    <p class="text-gray-200 text-base ">
      Some quick example and make up the bulk of the card's
      content.e text to build on the card title text to build on the card titl
    </p>
    <button style={{background:"#f9fe73"}} className=" text-grey-100 flex flex-row gap-x-2 font-bold  text-lg px-10 py-5 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-hotpink" type="button">LearnMore </button>
    {/* <button type="button" style={{background:"#f9fe73"}} class=" px-6 py-2.5 text-gray-900 font-medium text-lg leading-tight  rounded-3xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">LearnMore</button> */}
  </div>
    <img src={web33} alt="" className='w-min'/>
    <div className="grid place-items-center content-center w-full h-24 " style={{background:"#f9fe73"}} >
      <p className=' font-bold text-lg align-middle'>
      Web3Era &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Web3Era &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web3Era &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web3Era &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web3Era &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web3Era &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </div>
  </div>
</div>
    </div>
  )
}
