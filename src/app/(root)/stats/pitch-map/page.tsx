import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
            <Image width={1080}  height={720} src={'/maintain.png'} alt='maintain' layout='responsive'/>
    </div>
  )
}

export default page