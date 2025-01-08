import React from 'react'
// import Pick11PageContainer from './_components/Pick11PageContainer'
import Image from 'next/image'

const page = () => {
    return (
        <div className='crick-Container pt-16 md:pt-20 xl:pt-24'>
            {/* <Pick11PageContainer/> */}
            <Image width={1080} height={720} src={'/maintain.png'} alt='maintain' layout='responsive' />
        </div>
    )
}

export default page