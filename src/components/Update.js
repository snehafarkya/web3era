import React from 'react'
import Updateinfocard from './Updateinfocard'

export default function Update() {
  return (
    <div className='flex flex-col block justify-center items-center mt-20 mb-20 max-w-3xl m-auto'>
        <h1 className='text-white font-bold md:text-5xl text-2xl flex mb-10'>Latest Updates</h1>
        <p className='text-gray-200 mb-20 max-w-sm text-center '>
          Focus on the roduct not blockchain complexity and stick to your standard workflow
        </p>
        <Updateinfocard/>
    </div>
  )
}
