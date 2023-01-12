import React from 'react'
import launch from './assets/launch.png'
export default function Updateinfocard() {
  return (
    <div className='flex justify-center gap-x-5 grid grid-cols-1 gap-y-5'>
      <div class="flex justify-center p-4 rounded-lg" style={{background:"#050a36"}}>
        <div class="rounded-lg shadow-lg max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="rounded-t-lg" src={launch} alt=""/>
          </a>
        <div class="p-3">
            <h5 class="text-gray-100 text-xl font-medium mb-2">About</h5>
            <p class="text-gray-400 text-base mb-4">
            <span className='w-10 h-10 rounded' style={{background:'#f6fa73'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;  Some quick example  
          </p>
          <p class="text-gray-400 text-base mb-4">
            <span className='w-10 h-10 rounded-full' style={{background:'#9641c6'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp; Some quick example  
          </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center rounded-lg p-4" style={{background:"#050a36"}}>
        <div class="rounded-lg shadow-lg  max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg" src={launch} alt=""/>
          </a>
        <div class="p-3">
          <h5 class="text-gray-100 text-xl font-medium mb-2">Launch</h5>
          <p class="text-gray-400 text-base mb-4">
            <span className='w-10 h-10 rounded' style={{background:'#f6fa73'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp; Some quick example  
          </p>
          <p class="text-gray-400 text-base mb-4">
            <span className='w-10 h-10 rounded-full' style={{background:'#9641c6'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp; Some quick example  
          </p>
        </div>
      </div>
      </div>
      <div class="flex justify-center rounded-lg p-4" style={{background:"#050a36"}}>
        <div class="rounded-lg shadow-lg  max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg" src={launch} alt=""/>
          </a>
          <div class="p-3">
            <h5 class="text-gray-100 text-xl font-medium mb-2">Web3</h5>
            <p class="text-gray-400 text-base mb-4">
            <span className='w-10 h-10 rounded' style={{background:'#f6fa73'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp; Some quick example  
          </p>
          <p class="text-gray-400 text-base mb-4">
            <span className='w-10 h-10 rounded-full' style={{background:'#9641c6'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp; Some quick example  
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
