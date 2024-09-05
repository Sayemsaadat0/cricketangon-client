import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='crick-Container'>
      <section className="p-10 border border-gray-400 grid grid-cols-3 gap-10 ">
        <div className="space-y-10">
          <div className="w-60 h-72 row-span-2 bg-amber-400 div1"></div>
          <div className="w-60 h-72 bg-cyan-400 div2"></div>
        </div>
        <div className="space-y-10">
          <div className="w-60 h-96 row-span-2 bg-purple-400 "></div>
          <div className="w-60 h-48 bg-yellow-400"></div>
        </div>
        <div className="space-y-10">
          <div className="w-60 h-44  bg-cyan-500 "></div>
          <div className="w-60 h-44 bg-blue-600"></div>
          <div className="w-60 h-44 bg-rose-500"></div>
        </div>
      </section>
    </div>
  )
}

export default page