import React from 'react'
import Image from 'next/image'
import Button from '@/components/core/button/Button'
import Link from 'next/link'

const HomeContainer = () => {
    return (
        <div className='crick-Container w-full h-full  lg:max-h-screen overflow-hidden text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-28 gap-10'>
            <div className='space-y-10'>
                {/* Fantacy Cricket */}
                <div className='w-full md:max-w-[350px]  bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] p-5 rounded-[20px] space-y-6 group hover:bg-c-violet-600 duration-300'>
                    <div className=' p-3 space-y-3'>
                        <h3 className='xl:text-[32px] text-left '>Fantacy Cricket</h3>
                        <p className='leading-7'>Create your dream team, score points based on real matches, and compete globally.Join now to turn your cricket knowledge into victory!</p>
                    </div>
                    <div className='w-full h-full max-w-[350px] group-hover:scale-105 duration-300 aspect-[3/2] '>
                        <Image
                            className="object-cover w-full h-full rounded-[20px]"
                            src={'https://placehold.co/150x150/FFFFFF/000000/png'}
                            alt="fantasy"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
                {/* Pick Yoour Own Eleven */}
                <div className='w-full md:max-w-[350px] bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] p-5 rounded-[20px] space-y-6 duration-300 group hover:bg-c-violet-600 '>
                    <div className=' p-3 space-y-3'>
                        <h3 className='xl:text-[32px] text-left'>Pick your own XI</h3>
                        <p className='leading-7 max-w-[90%]'>You’ve got the best players in the world available to you – who gets in your World Best XI?</p>
                    </div>
                    <div className='w-full h-full max-w-[350px]  aspect-[3/2] '>
                        <Image
                            className="object-cover w-full h-full group-hover:scale-105  duration-300 rounded-[20px]"
                            src={'https://placehold.co/150x150/FFFFFF/000000/png'}
                            alt="fantasy"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
            {/* second */}
            <div className='space-y-10 flex flex-col'>
                {/* Fantacy Cricket */}
                <div className='flex-1  max-w-[450px] w-fit bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] rounded-[20px] space-y-6 group hover:bg-c-violet-600 duration-300'>

                    <div className='w-full h-full  max-w-[450px] group-hover:scale-105 duration-300  '>
                        <Image
                            className="object-cover w-full h-full rounded-[20px]"
                            src={'https://placehold.co/394x620/FFFFFF/000000/png'}
                            alt="fantasy"
                            width={394}
                            height={620}
                        />
                    </div>
                </div>
                {/* Pick Yoour Own Eleven */}
                <div className=' max-w-[450px] bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] p-5 rounded-[20px] space-y-6 duration-300 group hover:bg-c-violet-600 flex flex-col md:flex-row  items-center'>
                    <div className='w-full h-full md:shrink-0 md:inline-block md:max-w-[170px] md:max-h-[170px] group-hover:scale-105 duration-300  '>
                        <Image
                            className="object-cover w-full h-full rounded-[20px]"
                            src={'https://placehold.co/170x170/FFFFFF/000000/png'}
                            alt="fantasy"
                            width={170}
                            height={170}
                        />
                    </div>

                    <div className='flex flex-col justify-center items-center text-center'>
                        <h3 className='xl:text-[32px] text-left '>Shop Now</h3>
                        <p className='leading-7 max-w-[90%]'>Lorem ipsum dolor sit amet.</p>
                        <div className=" p-[1.5px] bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full w-fit">
                            <Link href={'/login'}>
                                <Button
                                    className=""
                                    variant="roundedBtn"
                                    label="Sign in"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className='space-y-10 flex flex-col'>
                {/* Fantacy Cricket */}

                {/* Pick Yoour Own Eleven */}
                <div className=' max-w-[350px] bg-gradient-to-t from-[#1B023B80] to-[#7E19A6]  rounded-[20px] space-y-6 duration-300 group hover:bg-c-violet-600 flex items-center'>
                    <div className='w-full h-full shrink-0 inline-block max-w-[350px] max-h-[170px]   rounded-[20px] '>
                        <Image
                            className="object-cover w-full h-full rounded-[20px]"
                            src={'https://placehold.co/350x200/FFFFFF/000000/png'}
                            alt="fantasy"
                            width={350}
                            height={200}
                        />
                    </div>


                </div>
                {/* Pick Yoour Own Eleven */}
                <div className=' max-w-[350px] bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] p-5 rounded-[20px] space-y-6 duration-300 group hover:bg-c-violet-600 flex items-center'>
                <div className='w-full h-full shrink-0 inline-block max-w-[350px] max-h-[170px]   rounded-[20px] '>
                        <Image
                            className="object-cover w-full h-full rounded-[20px]"
                            src={'https://placehold.co/350x200/FFFFFF/000000/png'}
                            alt="fantasy"
                            width={350}
                            height={200}
                        />
                    </div>

                </div>
                {/* Pick Yoour Own Eleven */}
                <div className='flex-1 max-w-[350px] bg-gradient-to-t from-[#1B023B80] to-[#7E19A6] p-5 rounded-[20px] space-y-6 duration-300 group hover:bg-c-violet-600 flex items-center'>
                    <div className='w-full h-full shrink-0 inline-block   group-hover:scale-105 duration-300  '>
                        <Image
                            className="object-cover w-full h-full rounded-[20px]"
                            src={'https://placehold.co/170x170/FFFFFF/000000/png'}
                            alt="fantasy"
                            width={170}
                            height={170}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeContainer