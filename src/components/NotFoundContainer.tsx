"use client"
import Image from 'next/image'
import React from 'react'
import Button from './core/button/Button'
import { useRouter } from 'next/navigation'

const NotFoundContainer = () => {
    const { back } = useRouter();
    return (
        <div className='bg-white  rounded-[12px] p-5 md:p-10 space-y-6 md:space-y-10 '>
            <div className=" ">
                <Image className='w-[260px] md:w-[380px]' src="/404.png" width={380} height={280} alt="404-Icon" />
            </div>
            <div className='space-y-3 md:space-y-5'>
                <p className='text-center font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem]'>Looks like you’ve got lost..</p>
                <div>
                    <Button onClick={back} className="w-full" variant={'regulerBtn'} label="Go Back" />
                </div>
            </div>
        </div>
    )
}

export default NotFoundContainer