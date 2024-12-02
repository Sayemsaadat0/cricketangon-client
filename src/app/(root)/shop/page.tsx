import Image from 'next/legacy/image'
import React from 'react'

const Shop = () => {
  return (
    <div className='crick-Container pt-16 md:pt-20 xl:pt-24'>

      <Image width={1080}  height={720} src={'/maintain.png'} alt='maintain' layout='responsive'/>
    </div>
  )
}

export default Shop